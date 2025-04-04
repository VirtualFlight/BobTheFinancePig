import { Link } from "expo-router";
import { Text, View, ScrollView, StyleSheet, Image, Dimensions, ActivityIndicator} from "react-native";
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
  const isLoading = true; // Replace this with your loading logic
  const data = {
    labels: [],
    datasets: [{ data: [20, 50, 40, 80, 99] }],
  };
  const [message, setMessage] = useState({});

  useEffect(() => {
    axios.get("http://10.0.0.49:5000/") // Change 'localhost' to your machine's IP if using a real device
      .then(response => setMessage(response.data.message))
      .catch(error => console.log(error));
  }, []);

  const items = [];
  for (const property in message) {
    items.push(<AiRecommendation symbol={property} price={message[property][0]} change={message[property][1]} image={message[property][2]}></AiRecommendation>);
  }
  
  

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
                color: (opacity = 1) => `rgba(91, 3, 186, ${1})`,
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
            {items.length > 0 ? (
              items
            ) : (
              <ActivityIndicator size="large" color="#FFFFFF" />
          )}

              

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

        <View className="w-screen absolute bottom-0 m-0 left-0">
            <NavBar/>
        </View>

        
    </View>
  );
}
