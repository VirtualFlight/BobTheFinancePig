import {View, Text, StyleSheet, Pressable} from 'react-native';
import { useRouter } from 'expo-router';
import CategoryItem from "@/components/CategoryItem";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';

export default function SearchingNowItem({cost, percent, percentColor, name}) {
    const router = useRouter();
    return (
        <View className="flex-row justify-center h-[150px] w-full">
          <View className='w-full h-full bg-[#141414] rounded-3xl p-4 flex-row gap-4 justify-center overflow-hidden text-wrap'>
            <View className="flex-1 h-full"> 
                <View className='flex-row gap-4'>
                <Text className='text-white text-xl'>{name}</Text>
                <View className='flex-col items-center'>
                  <Text className='text-white text-xs'>${cost}</Text>
                  <Text className='text-[10px]' style={{ color: percentColor }}>{percent}%  Today</Text>
                </View>
                </View>
                <Text className='text-zinc-600 text-[10px]' numberOfLines={6} ellipsizeMode="tail">
                    Bitcoin is the currency of the Internet: a distributed, worldwide, decentralized digital money. 
                    Unlike traditional currencies such as dollars, bitcoins are issued and managed without any central 
                    authority whatsoever: there is no government, company, or bank in charge of Bitcoin. As such, it is 
                    more resistant to wild inflation and corrupt banks....
                </Text>
            </View>
            <View className='bg-white h-full w-1/2'>

            </View>
          </View>
      </View>

      
  
    );
  } 