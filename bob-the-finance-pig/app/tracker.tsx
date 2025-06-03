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
            {/* <View className="w-full h-1/3 bg-[#ffffff]"></View> */}
            <View className="w-full justify-center items-center">
                <Text className="text-white text-3xl">Febuary 28 2025</Text>
                {/* <Text className="text-white ">Expense Tracker</Text> */}
            </View>
            <View className="w-full h-1/6 border-2 border-red-400 justify-center items-center gap-4">
                <View className="w-5/6 h-8 border-2 border-red-400 rounded-xl"></View>
                <View className="w-5/6 h-8 border-2 border-red-400 rounded-xl"></View>
            </View>
            <View className="p-4 w-full h-1/2">
                <View className="flex-row">
                    <View className="w-5/6 h-8 border-2 border-red-400 rounded-xl"></View>
                    <View className="w-1/6 h-8 border-2 border-red-400 rounded-xl"></View>
                </View>
                <View className="w-full h-full border-2 border-blue-400">
                    <View></View>
                </View>
            </View>







        </View>
            <View className="w-screen absolute bottom-0 m-0 left-0">
                <NavBar/>
            </View>
      </View>
  );
}
