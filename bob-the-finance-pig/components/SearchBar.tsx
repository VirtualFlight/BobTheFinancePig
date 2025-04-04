import {View, Text, StyleSheet, Pressable} from 'react-native';
import { useRouter } from 'expo-router';
import {TextInput, TouchableWithoutFeedback} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import SearchIcon from "../assets/images/Search.svg";


export default function SearchBar({ searchQuery, setSearchQuery, isHidden = false,  }: { isHidden?: boolean }) {
    const router = useRouter();
    return (
        <View className="w-full flex-row justify-center items-center">
            <View className="w-5/6 rounded-lg h-12 flex-row items-center bg-[#141414]">
                <Pressable 
                    onPress={() => router.navigate('/searchingNow')} 
                    className='px-3 h-12 rounded-lg flex-row items-center bg-[#141414] gap-4 w-full'
                >
                    <View>
                        <SearchIcon width={20} height={20} />
                    </View>
                    {isHidden && (
                        <Text className='text-[#aaaaaa]'>Search</Text>
                    )}
                    {!isHidden && (
                        <TextInput
                        placeholder="Search"
                        placeholderTextColor="#aaaaaa"
                        className="text-white flex-1"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                    )}
                </Pressable>
            </View>
        </View>
    );
}