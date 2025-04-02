import LoginButton from "@/components/LoginButton";
import NavBar from "@/components/NavBar"; 
import Header from "@/components/Header";
import { Link } from "expo-router";
import { Text, View, ScrollView, StyleSheet, Image, StatusBar } from "react-native";
// import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";
import "../global.css"
import SearchBar from "@/components/SearchBar";
import SearchCard from "@/components/SearchCard";

export default function Search() {
  return (
    
      <View className="h-full items-center py-10">
        <Header/>

        <View className="mt-20 w-full h-full gap-10">
            <SearchBar isHidden={true}/>
            <SearchCard/>

        </View>
            <View className="w-screen absolute bottom-0 m-0 left-0">
                <NavBar/>
            </View>
      </View>
  );
}
