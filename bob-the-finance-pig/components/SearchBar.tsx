import {View, Text, StyleSheet, Pressable} from 'react-native';
import { useRouter } from 'expo-router';
import {TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import SearchIcon from "../assets/images/Search.svg";


export default function SearchBar() {
    const router = useRouter();
    return (
        <View className="w-full flex-row justify-center items-center">
            <View className="w-5/6 rounded-lg px-3 h-12 flex-row items-center bg-[#141414] gap-4">
                <View>
                    <SearchIcon width={20} height={20}></SearchIcon>
                </View>
                <SafeAreaProvider>
                    <SafeAreaView>
                        <TextInput placeholder="Search" placeholderTextColor="#aaaaaa" className="text-white flex-1"/>
                    </SafeAreaView>
                </SafeAreaProvider>
            </View>
        </View>
  
    );
  }