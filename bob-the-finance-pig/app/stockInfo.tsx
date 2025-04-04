import {View, Text, StyleSheet, Pressable, Dimensions, Image} from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
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
        name = 'Google',
        icon = `https://financialmodelingprep.com/image-stock/GE.png?apikey=`
    } = params;
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    return (
        <View className="h-full w-full items-center py-10">
            <Header/>
            <View className="mt-20 w-full h-full">
                <View className="flex-col items-center justify-center gap-4">
                  <Pressable onPress={() => router.navigate('/search')} className="500 left-4 absolute top-4">
                    <BackIcon height={20} width={20} />
                  </Pressable>
                  <Text className="text-white text-lg">{name}</Text>
                  <Image
                    source={{ 
                      uri: icon 
                    }}
                    style={{ 
                      width: 30, 
                      height: 30,
                      display: 'flex'
                    }}
                  />
                  <Text className="text-white text-xl">{cost}</Text>
                  <Text className="text-white text-xs" style={{ color: percentColor }}>{percent}% Today</Text>
                </View>
              <ScrollView className="w-full mb-48 flex-col" contentContainerStyle={{paddingBottom: 140}}> 
                {/* ^ THIS IS WHERE THE BOTTOM PADDING/MARGIN IS MESSED WITH */}
                <View className="w-full h-full p-4 flex-col">
                  <View className='w-full h-3/4 items-center flex-col justify-center'>
                          <LineChart
                          data={data}
                          width={screenWidth+115}
                          height={300}
                          chartConfig={{
                          backgroundGradientFrom: "#000", //change this to 000 later
                          backgroundGradientTo: "#000", //change this to 000 later
                          color: () => `rgba(91, 3, 186, ${1})`,
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
                          style={{
                          marginLeft: 20, // Counteract the extra width
                          }}
                          />
                      <View className="flex-row items-center justify-between w-full">
                                <Text className="text-white text-[8px]">1D</Text> 
                                <Text className="text-white text-[8px]">1W</Text> 
                                <Text className="text-white text-[8px]">1M</Text> 
                                <Text className="text-white text-[8px]">3M</Text> 
                                <Text className="text-white text-[8px]">1Y</Text> 
                                <Text className="text-white text-[8px]">5Y</Text> 
                        </View>
                  </View>
                  <View className='w-full h-1/4 border-t-2 border-t-[#212121] justify-center items-center gap-8'>
                    <View className='flex-row justify-evenly w-full'>
                      <Text className='text-[#555555] border-r-[1px] border-[#212121] w-1/2 text-center'>Open: ###</Text>
                      <Text className='text-[#555555] border-l-[1px] border-[#212121] w-1/2 text-center'>Vol: ###</Text>
                    </View>
                    <View className='flex-row justify-evenly w-full'>
                      <Text className='text-[#555555] border-r-[1px] border-[#212121] w-1/2 text-center'>High: ###</Text> 
                      <Text className='text-[#555555] border-l-[1px] border-[#212121] w-1/2 text-center'>Low: ###</Text>
                    </View>
                  </View>
                    <Text className='text-white text-center'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                      officia deserunt mollit anim id est laborum.
                    </Text>

                </View>
              </ScrollView>
            </View>
            <View className="w-screen absolute bottom-0 m-0 left-0">
              <NavBar/>
            </View>
        </View>
    );
}
