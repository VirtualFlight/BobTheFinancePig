import {View, Text, StyleSheet, Pressable, Dimensions} from 'react-native';
import { useRouter } from 'expo-router';
import GoogleIcon from "../assets/images/google-icon.svg";
import { useLocalSearchParams } from 'expo-router';
import NavBar from "@/components/NavBar"; 
import Header from "@/components/Header";
import { useWindowDimensions, ScrollView } from 'react-native';
import BackIcon from "../assets/images/back-icon.svg";
import {LineChart} from "react-native-chart-kit";

export default function StockInfo() {
    const params = useLocalSearchParams();
    const router = useRouter();
    const screenWidth = Dimensions.get("window").width;
      const data = {
        labels: [],
        datasets: [{ data: [20, 50, 40, 80, 99] }],
      };
    const { 
        cost = '$103,802,581', 
        percent = '0', 
        percentColor = '#FFFFFF', 
        name = 'Google' 
    } = params;
    return (
        <View className="h-full w-full items-center py-10">
            <Header/>
            <View className="mt-20 w-full h-full">
                <View className="flex-col items-center justify-center gap-4">
                  <Pressable onPress={() => router.navigate('/search')} className="500 left-4 absolute top-4">
                    <BackIcon height={20} width={20} />
                  </Pressable>
                  <Text className="text-white text-lg">{name}</Text>
                  <GoogleIcon height={24} width={24}/>
                  <Text className="text-white text-xl">{cost}</Text>
                </View>
              <ScrollView className="w-full mb-48" contentContainerStyle={{ flex: 1 }}>
                <View className="w-full h-full p-4 gap-4">
                  <View className='w-full h-3/4 bg-gray-900'>
                  <LineChart
                                data={data}
                                width={screenWidth}
                                height={250}
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
                  </View>
                  <View className='w-full h-1/4 border-t-2 border-t-[#212121] justify-center items-center gap-8'>
                    <View className='flex-row gap-24 justify-center'>
                      <Text className='text-[#555555]'>Open: ###</Text>
                      <Text className='text-[#555555]'>Vol: ###</Text>
                    </View>
                    <View className='flex-row gap-24'>
                      <Text className='text-[#555555]'>High: ###</Text> 
                      <Text className='text-[#555555]'>Low: ###</Text>
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
