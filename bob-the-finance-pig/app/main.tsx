import { Link } from "expo-router";
import { Text, View, ScrollView, StyleSheet, Image, Dimensions } from "react-native";
import NavBar from "@/components/NavBar"; 
import Header from "@/components/Header";
import {LineChart} from "react-native-chart-kit";
// import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";
import "../global.css"


export default function Main() {
  const screenWidth = Dimensions.get("window").width;

const data = {
  labels: ["1D", "1W", "1M", "3M", "1Y", "5Y"],
  datasets: [{ data: [20, 45, 28, 80, 99] }],
};

  return (
    <View className="px-3 h-full gap-4 py-10">
        
        
      <Header></Header>
      <View>

        <LineChart
          data={data}
          width={screenWidth - 20}
          height={220}
          chartConfig={{
            backgroundGradientFrom: "#fff",
            backgroundGradientTo: "#fff",
            color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
            labelColor: () => "#666",
            
          }}
          bezier
          // style={{ marginVertical: 10, borderRadius: 16 }}
        />
      </View>

      
            


        






      <NavBar></NavBar>

        
    </View>

    
    
  );


}
