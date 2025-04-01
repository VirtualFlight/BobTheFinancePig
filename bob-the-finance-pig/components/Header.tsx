import {View, Text, StyleSheet, Pressable} from 'react-native';
import { useRouter } from 'expo-router';
import ProfileIcon from "../assets/images/iconamoon-profile.svg";
import LightModeIcon from "../assets/images/light-mode-icon.svg";

export default function NavBar() {
  const router = useRouter();
  return (
    <View className="flex-row items-center justify-between">
        <Pressable>
            <LightModeIcon width={24} height={24}></LightModeIcon>

        </Pressable>
        <Pressable>

            <ProfileIcon width={24} height={24}></ProfileIcon>
        </Pressable>
    </View>

  );
}

