import {View, Text, StyleSheet, Pressable, Dimensions, useWindowDimensions, ScrollView} from 'react-native';
import { useRouter } from 'expo-router';
import CategoryItem from "@/components/CategoryItem";
import {LineChart} from "react-native-chart-kit";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';

export default function SearchingNowItem({cost, percent, percentColor, name, icon}) {
    const router = useRouter();
    const data = {
      labels: [],
      datasets: [{ data: [20, 50, 40, 80, 99] }],
    };
    const { width } = useWindowDimensions();
    const chartWidth = width * 0.4; // 40% of screen width (matches w-2/5)
    const chartHeight = 110; // Fixed height as per your requirement
    const cardMaxWidth = Math.min(width * 0.95, 600); // 95% of screen or 600px max
    const chartContainerWidth = cardMaxWidth * 0.33; // 33% of card width
    return (
        <View className="flex-row justify-center h-[150px] w-full">
          <Pressable onPress={() => router.navigate({pathname: '/stockInfo', params: { cost, percent, percentColor, name, icon}})} className="w-full h-full max-w-[95vw]">
            <View className='w-full h-full bg-[#141414] rounded-3xl p-4 flex-row gap-4 justify-center max-w-screen-sm'>
              <View className="flex-1 h-full">
              <View className='w-full flex-row justify-between gap-4'>
                <Text className='text-white text-lg w-3/4'>{name}</Text>

                <View className='flex-col items-end'>
                  <Text className='text-white text-xs'>{cost}</Text>
                  <Text className='text-[10px]' style={{ color: percentColor }}>
                    {percent}% T
                  </Text>
                </View>
              </View>
                  <Text className='text-zinc-600 text-[10px]' numberOfLines={6} ellipsizeMode="tail">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                  officia deserunt mollit anim id est laborum.
                  </Text>
              </View>
              <View className="h-full w-1/3 p-0 justify-center items-center overflow-hidden" style={{ width: chartContainerWidth }}>
              <ScrollView className="w-5/6" contentContainerStyle={{alignItems: "center", justifyContent: "center"}}>
                <LineChart
                  data={data}
                  width={chartContainerWidth*1.8} // Dynamic width based on screen
                  height={chartHeight}
                  chartConfig={{
                    // backgroundColor: "#141414",
                    backgroundGradientFrom: "#141414",
                    backgroundGradientTo: "#141414",
                    color: () => `rgba(91, 3, 186, 1)`,
                    fillShadowGradientFrom: "#5B03BA",
                    fillShadowGradientTo: "#141414",
                    fillShadowGradientOpacity: 1,
                  }}
                  formatYLabel={() => ""} // Hides Y-axis labels
                  bezier
                  withDots={false}
                  withInnerLines={false}
                  withOuterLines={false}
                  style={{
                    margin: 0, // Remove default margins
                    padding: 0, // Remove default padding
                    transform: [{ translateX: -15 }] // Fine-tune horizontal position
                  }}
                />
                <View className="flex-row items-center justify-between w-full">
                                <Text className="text-white text-[6px]">1D</Text> 
                                <Text className="text-white text-[6px]">1W</Text> 
                                <Text className="text-white text-[6px]">1M</Text> 
                                <Text className="text-white text-[6px]">3M</Text> 
                                <Text className="text-white text-[6px]">1Y</Text> 
                                <Text className="text-white text-[6px]">5Y</Text> 
                        </View>
              </ScrollView>
    </View>
            </View>
          </Pressable>
      </View>
    );
  } 