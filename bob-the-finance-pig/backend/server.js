const path = require("path");
require('dotenv').config({ path: path.resolve(__dirname, ".env.local") });
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const sp500 = ['AAPL', 'MSFT', 'NVDA', 'AMZN', 'META', 'BRK.B', 'GOOGL', 'AVGO', 'TSLA', 'GOOG', 'JPM', 'LLY', 'V', 'XOM', 'UNH', 'MA', 'COST', 'PG', 'NFLX', 'WMT', 'JNJ', 'ABBV', 'HD', 'CVX', 'KO', 'BAC', 'CRM', 'CSCO', 'PM', 'WFC', 'IBM', 'ORCL', 'ABT', 'MCD', 'LIN', 'MRK', 'GE', 'PEP', 'T', 'ACN', 'VZ', 'TMO', 'RTX', 'ISRG', 'DIS', 'PLTR', 'INTU', 'GS', 'QCOM', 'NOW']
const map = new Map();
let testing = [];

app.get("/", async (req, res) => {

   
    res.json({message: await stockRecommender()});

    // ---------------FOR DEBUGGING ONLY----------------------------
    // res.json({message: {
    //     NVDA: [
    //       103.05,
    //       -7.37,
    //       'https://images.financialmodelingprep.com/symbol/NVDA.png'
    //     ],
    //     META: [
    //       548.28,
    //       -35.65,
    //       'https://images.financialmodelingprep.com/symbol/META.png'
    //     ],
    //     AMZN: [
    //       181.68,
    //       -14.33,
    //       'https://images.financialmodelingprep.com/symbol/AMZN.png'
    //     ],
    //     MSFT: [
    //       376.36,
    //       -5.78,
    //       'https://images.financialmodelingprep.com/symbol/MSFT.png'
    //     ],
    //     GOOGL: [
    //       151.94,
    //       -5.1,
    //       'https://images.financialmodelingprep.com/symbol/GOOGL.png'
    //     ]
    //   }

    // });
    

    


});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    
});

async function stockRecommender(){
    try {
        const finnhub = require('finnhub');
        const api_key = finnhub.ApiClient.instance.authentications['api_key'];
        api_key.apiKey = process.env.FINNHUB_API;
        const finnhubClient = new finnhub.DefaultApi();
        let data;

        for (let i =0; i<sp500.length; i++){
            data = await new Promise((resolve, reject) => {
                finnhubClient.recommendationTrends(sp500[i], (error, data, response) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
            });
            map.set(sp500[i], data[0].strongBuy);
        }
        
        const sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
        let companyProfile = new Object();
        
        let counter= 0;

        for (const [key, value] of sortedMap) {
            if (counter < 7){
                console.log(`${key} = ${value}`);
                
                const result = await fmpCaller(key);
                companyProfile[key] = result;
                
                counter++;
            }
            else{
                break;
            }
        }
        

        
        console.log("in here");
        console.log(companyProfile);
        const obj = Object.fromEntries(sortedMap);
        
        return companyProfile;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}



async function fmpCaller(symbol) {
    const https = require('https');
    const apiKey = process.env.FMP_API; 
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'financialmodelingprep.com',
            port: 443,
            path: `/api/v3/profile/${symbol}?apikey=${apiKey}`,  // Make sure to replace with the actual path and API key
            method: 'GET'
        };

        const req = https.request(options, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk; // Accumulate the data chunks
            });

            res.on('end', () => {
                try {
                    const parsedData = JSON.parse(data); // Parse the raw response into a JavaScript object

                    // Make sure we have the data in the expected format
                    if (parsedData && parsedData[0]) {
                        const informationArray = [
                            parsedData[0].price,
                            parsedData[0].changes,
                            parsedData[0].image
                        ];
                        resolve(informationArray); // Resolve the Promise with the informationArray
                    } else {
                        reject('No data found for symbol');
                    }
                } catch (error) {
                    reject('Error parsing response: ' + error);
                }
            });

            res.on('error', (err) => {
                reject('Request failed: ' + err);
            });
        });

        req.end(); // Close the request
    });
}
