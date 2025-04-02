import {View, Text, StyleSheet, Pressable} from 'react-native';
import { useRouter } from 'expo-router';

import VisaIcon from "../assets/images/ri_visa-line.svg";

export default function AiRecommendation() {
  const router = useRouter();
  return (
    <View className="flex-row justify-center items-center gap-4 py-2">
        <VisaIcon width={24} height={24}></VisaIcon>

        <View className="flex-row justify-between w-20">
            <Text className="text-white text-[8px]">V</Text>
            <View>
            <Text className="text-white text-[8px]">273.25</Text>
            <Text className="text-red-200 text-[6px]">-8.73%</Text>
            </View>
        </View>
    </View>

  );
}



