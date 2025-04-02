import { Link } from "expo-router";
import { Text, View, ScrollView, StyleSheet, Image, Dimensions, } from "react-native";
import NavBar from "@/components/NavBar"; 
import Header from "@/components/Header";
import {LineChart} from "react-native-chart-kit";
import AiRecommendation from "@/components/AiRecommendation";
import HumanRecommendation from "@/components/HumanRecommendation";
// import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../global.css"


export default function Main() {
  const screenWidth = Dimensions.get("window").width;
  const data = {
    labels: [],
    datasets: [{ data: [20, 50, 40, 80, 99] }],
  };
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    axios.get("http://localhost:5000/") // Change 'localhost' to your machine's IP if using a real device
      .then(response => setMessage(response.data.data[0].strongBuy))
      .catch(error => console.log(error));
  }, []);

  const sp500 = ['MMM', 'AOS', 'ABT', 'ABBV', 'ACN', 'ADBE', 'AMD', 'AES', 'AFL', 'A', 'APD', 'ABNB', 'AKAM', 'ALB', 'ARE', 'ALGN', 'ALLE', 'LNT', 'ALL', 'GOOGL', 'GOOG', 'MO', 'AMZN', 'AMCR', 'AEE', 'AEP', 'AXP', 'AIG', 'AMT', 'AWK', 'AMP', 'AME', 'AMGN', 'APH', 'ADI', 'ANSS', 'AON', 'APA', 'APO', 'AAPL', 'AMAT', 'APTV', 'ACGL', 'ADM', 'ANET', 'AJG', 'AIZ', 'T', 'ATO', 'ADSK', 'ADP', 'AZO', 'AVB', 'AVY', 'AXON', 'BKR', 'BALL', 'BAC', 'BAX', 'BDX', 'BRK.B', 'BBY', 'TECH', 'BIIB', 'BLK', 'BX', 'BK', 'BA', 'BKNG', 'BSX', 'BMY', 'AVGO', 'BR', 'BRO', 'BF.B', 'BLDR', 'BG', 'BXP', 'CHRW', 'CDNS', 'CZR', 'CPT', 'CPB', 'COF', 'CAH', 'KMX', 'CCL', 'CARR', 'CAT', 'CBOE', 'CBRE', 'CDW', 'COR', 'CNC', 'CNP', 'CF', 'CRL', 'SCHW', 'CHTR', 'CVX', 'CMG', 'CB', 'CHD', 'CI', 'CINF', 'CTAS', 'CSCO', 'C', 'CFG', 'CLX', 'CME', 'CMS', 'KO', 'CTSH', 'CL', 'CMCSA', 'CAG', 'COP', 'ED', 'STZ', 'CEG', 'COO', 'CPRT', 'GLW', 'CPAY', 'CTVA', 'CSGP', 'COST', 'CTRA', 'CRWD', 'CCI', 'CSX', 'CMI', 'CVS', 'DHR', 'DRI', 'DVA', 'DAY', 'DECK', 'DE', 'DELL', 'DAL', 'DVN', 'DXCM', 'FANG', 'DLR', 'DFS', 'DG', 'DLTR', 'D', 'DPZ', 'DASH', 'DOV', 'DOW', 'DHI', 'DTE', 'DUK', 'DD', 'EMN', 'ETN', 'EBAY', 'ECL', 'EIX', 'EW', 'EA', 'ELV', 'EMR', 'ENPH', 'ETR', 'EOG', 'EPAM', 'EQT', 'EFX', 'EQIX', 'EQR', 'ERIE', 'ESS', 'EL', 'EG', 'EVRG', 'ES', 'EXC', 'EXE', 'EXPE', 'EXPD', 'EXR', 'XOM', 'FFIV', 'FDS', 'FICO', 'FAST', 'FRT', 'FDX', 'FIS', 'FITB', 'FSLR', 'FE', 'FI', 'F', 'FTNT', 'FTV', 'FOXA', 'FOX', 'BEN', 'FCX', 'GRMN', 'IT', 'GE', 'GEHC', 'GEV', 'GEN', 'GNRC', 'GD', 'GIS', 'GM', 'GPC', 'GILD', 'GPN', 'GL', 'GDDY', 'GS', 'HAL', 'HIG', 'HAS', 'HCA', 'DOC', 'HSIC', 'HSY', 'HES', 'HPE', 'HLT', 'HOLX', 'HD', 'HON', 'HRL', 'HST', 'HWM', 'HPQ', 'HUBB', 'HUM', 'HBAN', 'HII', 'IBM', 'IEX', 'IDXX', 'ITW', 'INCY', 'IR', 'PODD', 'INTC', 'ICE', 'IFF', 'IP', 'IPG', 'INTU', 'ISRG', 'IVZ', 'INVH', 'IQV', 'IRM', 'JBHT', 'JBL', 'JKHY', 'J', 'JNJ', 'JCI', 'JPM', 'JNPR', 'K', 'KVUE', 'KDP', 'KEY', 'KEYS', 'KMB', 'KIM', 'KMI', 'KKR', 'KLAC', 'KHC', 'KR', 'LHX', 'LH', 'LRCX', 'LW', 'LVS', 'LDOS', 'LEN', 'LII', 'LLY', 'LIN', 'LYV', 'LKQ', 'LMT', 'L', 'LOW', 'LULU', 'LYB', 'MTB', 'MPC', 'MKTX', 'MAR', 'MMC', 'MLM', 'MAS', 'MA', 'MTCH', 'MKC', 'MCD', 'MCK', 'MDT', 'MRK', 'META', 'MET', 'MTD', 'MGM', 'MCHP', 'MU', 'MSFT', 'MAA', 'MRNA', 'MHK', 'MOH', 'TAP', 'MDLZ', 'MPWR', 'MNST', 'MCO', 'MS', 'MOS', 'MSI', 'MSCI', 'NDAQ', 'NTAP', 'NFLX', 'NEM', 'NWSA', 'NWS', 'NEE', 'NKE', 'NI', 'NDSN', 'NSC', 'NTRS', 'NOC', 'NCLH', 'NRG', 'NUE', 'NVDA', 'NVR', 'NXPI', 'ORLY', 'OXY', 'ODFL', 'OMC', 'ON', 'OKE', 'ORCL', 'OTIS', 'PCAR', 'PKG', 'PLTR', 'PANW', 'PARA', 'PH', 'PAYX', 'PAYC', 'PYPL', 'PNR', 'PEP', 'PFE', 'PCG', 'PM', 'PSX', 'PNW', 'PNC', 'POOL', 'PPG', 'PPL', 'PFG', 'PG', 'PGR', 'PLD', 'PRU', 'PEG', 'PTC', 'PSA', 'PHM', 'PWR', 'QCOM', 'DGX', 'RL', 'RJF', 'RTX', 'O', 'REG', 'REGN', 'RF', 'RSG', 'RMD', 'RVTY', 'ROK', 'ROL', 'ROP', 'ROST', 'RCL', 'SPGI', 'CRM', 'SBAC', 'SLB', 'STX', 'SRE', 'NOW', 'SHW', 'SPG', 'SWKS', 'SJM', 'SW', 'SNA', 'SOLV', 'SO', 'LUV', 'SWK', 'SBUX', 'STT', 'STLD', 'STE', 'SYK', 'SMCI', 'SYF', 'SNPS', 'SYY', 'TMUS', 'TROW', 'TTWO', 'TPR', 'TRGP', 'TGT', 'TEL', 'TDY', 'TER', 'TSLA', 'TXN', 'TPL', 'TXT', 'TMO', 'TJX', 'TKO', 'TSCO', 'TT', 'TDG', 'TRV', 'TRMB', 'TFC', 'TYL', 'TSN', 'USB', 'UBER', 'UDR', 'ULTA', 'UNP', 'UAL', 'UPS', 'URI', 'UNH', 'UHS', 'VLO', 'VTR', 'VLTO', 'VRSN', 'VRSK', 'VZ', 'VRTX', 'VTRS', 'VICI', 'V', 'VST', 'VMC', 'WRB', 'GWW', 'WAB', 'WBA', 'WMT', 'DIS', 'WBD', 'WM', 'WAT', 'WEC', 'WFC', 'WELL', 'WST', 'WDC', 'WY', 'WSM', 'WMB', 'WTW', 'WDAY', 'WYNN', 'XEL', 'XYL', 'YUM', 'ZBRA', 'ZBH', 'ZTS'];
  

  return (
    <View className="h-full gap-4 py-10 items-center">
      <Header/>

        <View className="gap-2 w-full items-center mt-16 mb-0">
          <Text className="text-white font-bold text-xl">Top Stocks</Text>
          <Text className="text-white text-opacity-90 text-lg">Bitcoin (BTC)</Text>
        </View>
        {/* Graph */}
        <View className="h-1/5">

          <ScrollView scrollEnabled={false} contentContainerStyle={{alignItems: "center", justifyContent: "center"}}>
            <LineChart
              data={data}
              width={screenWidth+100}
              height={200}
              chartConfig={{
                backgroundGradientFrom: "#000", //change this to 000 later
                backgroundGradientTo: "#000", //change this to 000 later
                color: (opacity = 1) => `rgba(91, 3, 186, ${opacity})`,
                labelColor: () => "#fff",
                fillShadowGradientFrom:"#5B03BA",
                fillShadowGradientTo:"#000000",
                fillShadowGradientOpacity: 1, // 👈 Ensure the gradient is visible
                
                propsForLabels: {
                  fontSize: 10, // Decrease label size
                },
                decimalPlaces:0,
              }}
              bezier
              yAxisLabel=""
              withDots={false}
              withInnerLines={false}
              withOuterLines={false}
              formatYLabel={() => ""} // Hides Y-axis labels
            />
          </ScrollView>
        </View>
        <View className="flex-row items-center justify-center gap-10">
          <Text className="text-white text-[8px]">1D</Text> 
          <Text className="text-white text-[8px]">1W</Text> 
          <Text className="text-white text-[8px]">1M</Text> 
          <Text className="text-white text-[8px]">3M</Text> 
          <Text className="text-white text-[8px]">1Y</Text> 
          <Text className="text-white text-[8px]">5Y</Text> 
      
        </View>
        
        <View className="flex-row justify-center gap-3 py-5">

          <View className="items-center justify-center gap-4">
            <Text className="text-white font-semibold text-[12px]">AI Recommendation:</Text>
            <View className="bg-[#1A1A1A] rounded-xl w-40 ">
              <AiRecommendation></AiRecommendation>
              <AiRecommendation></AiRecommendation>
              <AiRecommendation></AiRecommendation>
              <AiRecommendation></AiRecommendation>
              <AiRecommendation></AiRecommendation>
              <AiRecommendation></AiRecommendation>


            </View>
          </View>

          <View className="gap-4 items-center">
            <Text className="text-white font-bold text-[12px]">Human Recommendation:</Text>
            <View className="gap-3 w-40">
              
              <HumanRecommendation></HumanRecommendation>
              <HumanRecommendation></HumanRecommendation>
              <HumanRecommendation></HumanRecommendation>

            </View>
          </View>



            
        </View>

        {/* ONLY FOR DEBUGGING PURPOSES */}
        <Text className="text-white">{message}</Text>


      
            


        





      
        <View className="w-screen absolute bottom-0 m-0 left-0">
            <NavBar/>
        </View>

        
    </View>
  );
}
