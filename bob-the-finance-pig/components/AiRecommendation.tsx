import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import { useRouter } from 'expo-router';

import VisaIcon from "../assets/images/ri_visa-line.svg";

export default function AiRecommendation({symbol = 'LOADING',price = 273.25,change = -8.73,image = 'https://api-ninjas-data.s3.us-west-2.amazonaws.com/logos/l476432a3e85a0aa21c23f5abd2975a89b6820d63.png'}) {
  const router = useRouter();
  let changeColor;
  if (change < 0){
    changeColor = '#CB4A4A';
  }
  else{
    changeColor = '#4ACB6E';
  }


  return (
    <View className="flex-row justify-center items-center gap-4 py-2">
        <Image source={ {uri: image} } className='w-5 h-5'/>

        <View className="flex-row justify-between w-20">
            <Text className="text-white text-[8px]">{symbol}</Text>
            <View className='items-end'>
              <Text className="text-white text-[8px]">${price}</Text>
              <Text style={{color: changeColor}} className="text-[6px]">{change}</Text>
            </View>
        </View>
    </View>

  );
}



