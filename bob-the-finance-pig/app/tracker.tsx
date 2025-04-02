import LoginButton from "@/components/LoginButton";
import NavBar from "@/components/NavBar"; 
import Header from "@/components/Header";
import { Link } from "expo-router";
import { Text, View, ScrollView, StyleSheet, Image, StatusBar } from "react-native";
import "../global.css"

export default function Tracker() {
  return (
    
      <View className="h-full items-center py-10">
        <Header/>
        <View className="mt-20 w-full h-full border-2 border-red-500">
            {/* <View className="w-full h-1/3 bg-[#ffffff]"></View>
            <View className="w-full h-1/3 bg-[#ffffff]"></View>
            <View className="w-full h-1/3 bg-[#ffffff]"></View> */}







        </View>
            <View className="w-screen absolute bottom-0 m-0 left-0">
                <NavBar/>
            </View>
      </View>
  );
}
