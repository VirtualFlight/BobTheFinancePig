import {View, Text, StyleSheet, Pressable} from 'react-native';
import { useRouter } from 'expo-router';
import GoogleIcon from "../assets/images/google-icon.svg";


export default function CategoryItem({name, icon, percent, percentColor = '#FFFFFF'}) {
    return (
      <View className='h-1/5 w-full flex-row gap-4 items-center justify-between p-4'>
        <View className='justify-center flex-row items-center gap-2'>
        <GoogleIcon width={16} height={16} />
        <Text className='text-white text-base'>{name}</Text>
        </View>
        <Text style={{ color: percentColor }} className='text-xs'>{percent}%</Text>
      </View>
    );
  }