import {View, Text, StyleSheet, Pressable} from 'react-native';
import { useRouter } from 'expo-router';
import HomeIcon from '../assets/images/home-icon.svg';
import SearchIcon from '../assets/images/search-icon.svg';
import BobIcon from '../assets/images/bob-the-pig-icon.svg';

export default function NavBar() {
  const router = useRouter();
  return (
    <View className="flex-row items-center justify-between">
        <Pressable onPress={() => router.navigate('/')} className="items-center justify-center">
            {/* <Text> Hello</Text> */}
            <HomeIcon width={24} height={24}></HomeIcon>
            <Text className='text-white text-[8px]'>Home</Text>
        </Pressable>

        <Pressable className="items-center justify-center ">
            <SearchIcon width={24} height={24}></SearchIcon>
            <Text className="text-white text-[8px]">Search</Text>
        </Pressable>

        <Pressable className="items-center justify-center ">
            <BobIcon width={24} height={24}></BobIcon>
            <Text className="text-white text-[8px]">Tracker</Text>
        </Pressable>
    </View>

  );
}

