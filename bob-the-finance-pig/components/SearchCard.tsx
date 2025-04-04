import {View, Text, StyleSheet, Pressable, ScrollView} from 'react-native';
import { useRouter } from 'expo-router';
import CategoryItem from "@/components/CategoryItem";

export default function SearchCard() {
    const router = useRouter();
    const topStock = ['AAPL', 'MSFT', 'NVDA', 'AMZN', 'META'];
    return (
        <View className="flex-row justify-center h-3/4 m-0 p-0">
          <View className='border-2 border-gray-900 w-2/3 items-center h-5/6 bg-[#0a0a0a] rounded-3xl p-4 gap-2'>
                <Text className='text-white text-xl'>Top Gainer</Text>
                <View className='items-center h-[90%] w-full'>
                  <View className='w-full h-full bg-black rounded-2xl'>
                    <CategoryItem name={'Google'} icon={'./'} percent={'+3.7'} percentColor={'#4ACB6E'}/>
                    <CategoryItem name={'Google'} icon={'./'} percent={'+41'} percentColor={'#4ACB6E'}/>
                    <CategoryItem name={'Google'} icon={'./'} percent={'-3.9'} percentColor={'#BE4545'}/>
                    <CategoryItem name={'Google'} icon={'./'} percent={'11'} percentColor={'#4ACB6E'}/>
                    <CategoryItem name={'Google'} icon={'./'} percent={'-9.1'} percentColor={'#BE4545'}/>
                  </View>
                </View>
          </View>
      </View>

      
  
    );
  } 