import {View, Text, StyleSheet, Pressable} from 'react-native';
import { useRouter } from 'expo-router';
import ProfileIcon from "../assets/images/iconamoon-profile.svg";
import LightModeIcon from "../assets/images/light-mode-icon.svg";

export default function Header() {
  const router = useRouter();
  return (
    <View className="w-full absolute top-16">
    <View className="flex-row items-center justify-between px-10">
        <Pressable>
            <LightModeIcon width={24} height={24}></LightModeIcon>

        </Pressable>
        <Pressable onPress={() => router.navigate('/')}>

            <ProfileIcon width={24} height={24}></ProfileIcon>
        </Pressable>
    </View>
    </View>

  );
}

