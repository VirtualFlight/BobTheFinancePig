const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const sp500 = ['AAPL', 'MSFT', 'NVDA', 'AMZN', 'META', 'BRK.B', 'GOOGL', 'AVGO', 'TSLA', 'GOOG', 'JPM', 'LLY', 'V', 'XOM', 'UNH', 'MA', 'COST', 'PG', 'NFLX', 'WMT', 'JNJ', 'ABBV', 'HD', 'CVX', 'KO', 'BAC', 'CRM', 'CSCO', 'PM', 'WFC', 'IBM', 'ORCL', 'ABT', 'MCD', 'LIN', 'MRK', 'GE', 'PEP', 'T', 'ACN', 'VZ', 'TMO', 'RTX', 'ISRG', 'DIS', 'PLTR', 'INTU', 'GS', 'QCOM', 'NOW']
let object = {};
let testing = [];


// Sample API route
app.get("/", (req, res) => {

    const finnhub = require('finnhub');
    const api_key = finnhub.ApiClient.instance.authentications['api_key'];
    api_key.apiKey = "cvmnflhr01ql90pv2gk0cvmnflhr01ql90pv2gkg"
    const finnhubClient = new finnhub.DefaultApi();
    
    // for (let i =0; i<sp500.length; i++){
    //     object.sp500[i] = async () => {
    //         finnhubClient.recommendationTrends('AMD', (error, data, response) => {
    //             // return data.data[0].response;
    //             res.json({ data: data });
    //         });
    //     }
    // }
    
    // finnhubClient.recommendationTrends('AMD', (error, data, response) => {
    //     res.json({ message: data });
    //     return data;
    //     // console.log("hello");
    //     // console.log(data);
    //     // console.log(data.data[0].response);
    // });

   
    foo();

    console.log(testing);




    


});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    
});

async function foo(){
    try {
        const data = await new Promise((resolve, reject) => {
            finnhubClient.recommendationTrends('AMD', (error, data, response) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(data);
                }
            });
        });

        // Send the response to the client
        res.json({ message: data });
        testing = data;
        
        // Log the data
        console.log(testing[0].strongBuy);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: 'Error fetching data' });
    }
}





