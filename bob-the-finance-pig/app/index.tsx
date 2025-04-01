import LoginButton from "@/components/LoginButton";
import NavBar from "@/components/NavBar";
import { Link } from "expo-router";
import { Text, View, ScrollView, StyleSheet, Image, StatusBar } from "react-native";
// import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";


export default function Index() {
  return (
    
    <View className="px-3 h-full gap-4">
      <StatusBar backgroundColor="transparent" translucent />
      {/* Change the gradient later */}
      <View className="border-4 border-purple-400 h-3/4 bg-gradient-to-b from-[#2E025D] from-0% via-[#000000] via-60%  to-[#2E025D] to-100% justify-center items-center">
        <Image source={require('@/assets/images/bob-image.png')}/>
      </View>
      <View className="gap-4">


        <LoginButton borderColor={'white'} backgroundColor={'white'} textColor={'black'} textMessage={'Login'} path={'/main'}></LoginButton>
        <LoginButton borderColor={'white'} backgroundColor={'black'} textColor={'white'} textMessage={'Register'} path={'/main'}></LoginButton>
      </View>
    </View>
  );


}
