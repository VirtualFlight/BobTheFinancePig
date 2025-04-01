import {View, Text, StyleSheet, Pressable} from 'react-native';
import { useRouter } from 'expo-router';

export default function SearchBar() {
    const router = useRouter();
    return (
        <View className="w-full flex-row justify-center items-center">
            <View className="w-5/6 rounded-lg px-3 h-12 flex-row items-center bg-gray-900">
                    <Text className='text-white text-base'>[icon] </Text>
                    <Text className='text-white text-base'>Search</Text>
            </View>
        </View>
  
    );
  }