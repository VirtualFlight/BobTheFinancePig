import { Link } from "expo-router";
import { Text, View, ScrollView, StyleSheet, Image, Dimensions, } from "react-native";
import NavBar from "@/components/NavBar"; 
import Header from "@/components/Header";
import {LineChart} from "react-native-chart-kit";
import AiRecommendation from "@/components/AiRecommendation";
// import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";
import "../global.css"
import { styled } from "nativewind";

export default function Main() {
  const screenWidth = Dimensions.get("window").width;
  // const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];
  // const filteredLabels = labels.map((label, index) => 
  //   index % 2 === 0 ? label : "" // Shows every 2nd label
  // );
  const data = {
    labels: [],
    datasets: [{ data: [20, 45, 28, 80, 99] }],
  };


  return (
    <View className="px-3 h-full gap-4 py-10">
        
        
      <Header></Header>

        <View className="gap-2 w-full items-center">
          <Text className="text-white font-bold text-4xl">Top Stocks</Text>
          <Text className="text-white text-opacity-90 text-xl">Bitcoin (BTC)</Text>
        </View>
        {/* Graph */}
        <View className="h-2/6">

          <ScrollView scrollEnabled={false} contentContainerStyle={{alignItems: "center", justifyContent: "center"}}>
            <LineChart
              data={data}
              width={screenWidth+100}
              height={300}
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
        
        <View className="items-center justify-center border-4 border-purple-200 gap-4 ">
          <Text className="text-white font-bold">AI Recommendation:</Text>
          <View className="bg-[#1A1A1A] rounded-xl w-40 ">
            <AiRecommendation></AiRecommendation>
            <AiRecommendation></AiRecommendation>
            <AiRecommendation></AiRecommendation>
            <AiRecommendation></AiRecommendation>
            <AiRecommendation></AiRecommendation>
            <AiRecommendation></AiRecommendation>


          </View>
        </View>



      
            


        






      <NavBar></NavBar>

        
    </View>

    
    
  );


}
