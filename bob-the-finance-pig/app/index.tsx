import LoginButton from "@/components/LoginButton";
import NavBar from "@/components/NavBar";
import { Link } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View, ScrollView, StyleSheet, Image, StatusBar } from "react-native";
// import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";
import "../global.css"

export default function Index() {
  return (
    
    <LinearGradient
      colors={['#2E025D', '#000000', '#2E025D']}
      locations={[0, 0.5, 0.7, 1]} // Matches the percentages in your gradient
      >
    <View className="px-3 h-full gap-4">

      
      <StatusBar backgroundColor="transparent" translucent />
      {/* Change the gradient later */}
      <View className="h-3/4 bg-gradient-to-b from-[#2E025D] from-0% via-[#000000] via-60%  to-[#2E025D] to-100% justify-center items-center">
        <Image source={require('@/assets/images/bob-image.png')}/>
      </View>

    {/* <LinearGradient
      colors={['#2E025D', '#000000', '#2E025D']}
      locations={[0, 0.6, 1]} // Matches the percentages in your gradient
      style={{
        flex: 1,
        borderWidth: 4,
        // marginTop: 3,
        // borderColor: '#9333ea', // purple-400
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
      <Image source={require('@/assets/images/bob-image.png')} />
      </LinearGradient> */}
      <View className="gap-4">


        <LoginButton borderColor={'white'} backgroundColor={'white'} textColor={'black'} textMessage={'Login'} path={'/main'}></LoginButton>
        <LoginButton borderColor={'white'} backgroundColor={'black'} textColor={'white'} textMessage={'Register'} path={'/main'}></LoginButton>
      </View>
    </View>
  </LinearGradient>
  );


}
