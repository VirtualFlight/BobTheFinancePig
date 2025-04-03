import {View, Text, StyleSheet, Pressable, Dimensions, useWindowDimensions} from 'react-native';
import { useRouter } from 'expo-router';
import CategoryItem from "@/components/CategoryItem";
import {LineChart} from "react-native-chart-kit";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';

export default function SearchingNowItem({cost, percent, percentColor, name}) {
    const router = useRouter();
    const data = {
      labels: [],
      datasets: [{ data: [20, 50, 40, 80, 99] }],
    };
    // const screenWidth = Dimensions.get("window").width;
    const { width } = useWindowDimensions();
    const chartWidth = width * 0.4; // 40% of screen width (matches w-2/5)
    const chartHeight = 110; // Fixed height as per your requirement
    return (
        <View className="flex-row justify-center h-[150px] w-full">
          <Pressable onPress={() => router.navigate({pathname: '/stockInfo', params: { cost, percent, percentColor, name}})} className="w-full h-full">
            <View className='w-full h-full bg-[#141414] rounded-3xl p-4 flex-row gap-4 justify-center'>
              <View className="flex-1 h-full">
              <View className='w-full flex-row justify-between px-2'>
                <Text className='text-white text-xl'>{name}</Text>
                
                <View className='flex-col items-end'>
                  <Text className='text-white text-xs'>${cost}</Text>
                  <Text className='text-[10px]' style={{ color: percentColor }}>
                    {percent}% Today
                  </Text>
                </View>
              </View>
                  <Text className='text-zinc-600 text-[10px]' numberOfLines={6} ellipsizeMode="tail">
                      Bitcoin is the currency of the Internet: a distributed, worldwide, decentralized digital money. 
                      Unlike traditional currencies such as dollars, bitcoins are issued and managed without any central 
                      authority whatsoever: there is no government, company, or bank in charge of Bitcoin. As such, it is 
                      more resistant to wild inflation and corrupt banks....
                  </Text>
              </View>
              <View className="h-full w-2/5 min-w-xs justify-center items-center">
      <LineChart
        data={data}
        width={Math.max(chartWidth-25 , 125)} // Dynamic width based on screen
        height={chartHeight}
        chartConfig={{
          // backgroundColor: "#141414",
          backgroundGradientFrom: "#141414",
          backgroundGradientTo: "#141414",
          color: () => `rgba(91, 3, 186, 1)`,
          fillShadowGradientFrom: "#5B03BA",
          fillShadowGradientTo: "#141414",
          fillShadowGradientOpacity: 1,
          propsForLabels: {
            fontSize: 10, // Decrease label size
            },
        }}
        formatYLabel={() => ""} // Hides Y-axis labels
        bezier
        withDots={false}
        withInnerLines={false}
        withOuterLines={false}
        style={{
          margin: 0, // Remove default margins
          padding: 0, // Remove default padding
        }}
      />
    </View>
            </View>
          </Pressable>
      </View>

      
  
    );
  } 