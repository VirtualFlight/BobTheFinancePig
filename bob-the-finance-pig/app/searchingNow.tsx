import LoginButton from "@/components/LoginButton";
import NavBar from "@/components/NavBar"; 
import Header from "@/components/Header";
import { Link } from "expo-router";
import {useEffect, useState} from "react"
import { Text, View, ScrollView, StyleSheet, Image, StatusBar, ActivityIndicator } from "react-native";
import "../global.css"
import SearchBar from "@/components/SearchBar";
import SearchingNowItem from "@/components/SearchingNowItem";

const API_KEY = "QXI9ELICe9p072BV3JOI6Y8PKtKHfi1l";


const QUOTE_ENDPOINT = (symbol: string) => 
    `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${API_KEY}`;
const SEARCH_ENDPOINT = (keywords: string) => 
    `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keywords}&apikey=${API_KEY}`;

export default function SearchingNow() {
    const [searchQuery, setSearchQuery] = useState("");
    const [items, setItems] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const formatStockData = (stocks: any[]) => {
        return stocks.map((stock) => ({
            id: stock.symbol,
            name: stock.name,
            cost: stock.price.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }),
            percent: stock.changesPercentage.toFixed(2),
            percentColor: stock.changesPercentage >= 0 ? '#4ACB6E' : '#BE4545',
            icon: `https://financialmodelingprep.com/image-stock/${stock.symbol}.png?apikey=${API_KEY}`
        }));
    };
    const calculatePercentageChange = (timeSeries: any) => {
        const dailyData = Object.values(timeSeries);
        if (dailyData.length < 2) return 0;
        
        const latestClose = parseFloat(dailyData[0]['4. close']);
        const previousClose = parseFloat(dailyData[1]['4. close']);
        return ((latestClose - previousClose) / previousClose) * 100;
    };
    
    useEffect(() => {
        const fetchInitialStocks = async () => {
            try {
                const symbols = ['AAPL', 'MSFT', 'NVDA', 'AMZN', 'META', 'BRK.B', 'GOOGL', 'AVGO', 'TSLA', 'GOOG', 'JPM', 'LLY', 'V', 'XOM', 'UNH', 'MA', 'COST', 'PG', 'NFLX', 'WMT', 'JNJ', 'ABBV', 'HD', 'CVX', 'KO', 'BAC', 'CRM', 'CSCO', 'PM', 'WFC', 'IBM', 'ORCL', 'ABT', 'MCD', 'LIN', 'MRK', 'GE', 'PEP', 'T', 'ACN', 'VZ', 'TMO', 'RTX', 'ISRG', 'DIS', 'PLTR', 'INTU', 'GS', 'QCOM', 'NOW'];
                const response = await fetch(
                    `https://financialmodelingprep.com/api/v3/quote/${symbols.join(',')}?apikey=${API_KEY}`
                );
                
                const data = await response.json();
                
                if (data['Error Message']) {
                    throw new Error('Invalid API response');
                }
                
                setItems(formatStockData(data));
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        
        fetchInitialStocks();
    }, []);

    const handleSearch = async (text: string) => {
        setSearchQuery(text);
        if (text.length > 2) {
            try {
                const searchResponse = await fetch(SEARCH_ENDPOINT(text));
                const searchData = await searchResponse.json();
                
                if (searchData['Error Message']) {
                    throw new Error('Search failed');
                }

                const symbols = searchData.map((item: any) => item.symbol);
                const quoteResponse = await fetch(QUOTE_ENDPOINT(symbols.join(',')));
                const quoteData = await quoteResponse.json();
                
                setItems(formatStockData(quoteData));
            } catch (err: any) {
                setError(err.message);
            }
        }
    };


    const filteredItems = items.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (loading) {
        return (
            <View className="flex-1 justify-center items-center bg-[#141414]">
                <ActivityIndicator size="large" color="#5B03BA" />
            </View>
        );
    }

    if (error) {
        return (
            <View className="flex-1 justify-center items-center bg-[#141414]">
                <Text className="text-white text-lg">{error}</Text>
                <Text className="text-gray-500 mt-2">Please try again later</Text>
            </View>
        );
    }
    return (
      <View className="h-full items-center py-10">
        <Header/>

        <View className="mt-20 w-full h-full gap-8">
            <SearchBar 
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
            <ScrollView>
                <View className="flex-row justify-center h-fit mb-52 p-0">
                    <View className='w-5/6 items-center h-fit rounded-3xl'>
                        <View className="gap-4">
                            {filteredItems.length > 0 ? (
                                    filteredItems.map((item) => (
                                        <SearchingNowItem
                                            key={item.id}
                                            percent={item.percent}
                                            cost={item.cost}
                                            percentColor={item.percentColor}
                                            name={item.name}
                                            icon={item.icon} //this is undefined??
                                        />
                                    ))
                                ) : (
                                    <Text className="text-white text-center">
                                        No results found for "{searchQuery}"
                                    </Text>
                                )}
                        </View>
                    </View>
                </View>
            </ScrollView>

        </View>
            <View className="w-screen absolute bottom-0 m-0 left-0">
                <NavBar/>
            </View>
      </View>
  );
}