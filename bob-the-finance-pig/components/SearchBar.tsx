import {View, Text, StyleSheet, Pressable} from 'react-native';
import { useRouter } from 'expo-router';
import SearchIcon from "../assets/images/Search.svg";

export default function SearchBar() {
    const router = useRouter();
    return (
        <View className="w-full flex-row justify-center items-center">
            <View className="w-5/6 rounded-lg px-3 h-12 flex-row items-center bg-[#141414] gap-4">
                    <SearchIcon width={20} height={20}></SearchIcon>
                    <Text className='text-[#aaaaaa] text-base'>Search</Text>
            </View>
        </View>
  
    );
  }