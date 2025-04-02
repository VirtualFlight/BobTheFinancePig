import LoginButton from "@/components/LoginButton";
import NavBar from "@/components/NavBar"; 
import Header from "@/components/Header";
import { Link } from "expo-router";
import { Text, View, ScrollView, StyleSheet, Image, StatusBar } from "react-native";
// import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";
import "../global.css"
import SearchBar from "@/components/SearchBar";
import SearchingNowItem from "@/components/SearchingNowItem";

export default function SearchingNow() {
  return (
    
      <View className="h-full items-center py-10">
        <Header/>

        <View className="mt-20 w-full h-full gap-8">
            <SearchBar isHidden={false}/>
            <ScrollView>
                <View className="flex-row justify-center h-fit mb-52 p-0">
                    <View className='w-5/6 items-center h-fit rounded-3xl gap-4'>
                        <View className="gap-4">
                            {/* for testing purposes */}
                            <SearchingNowItem percent={'-3.18'} cost={'127,002,174'} percentColor={'#BE4545'} name={'Bitcoin'}/>
                            <SearchingNowItem percent={'2.62'} cost={'127,002,174'} percentColor={'#4ACB6E'} name={'Bitcoin'}/>
                            <SearchingNowItem percent={'-3.18'} cost={'127,002,174'} percentColor={'#BE4545'} name={'Bitcoin'}/>
                            <SearchingNowItem percent={'-3.18'} cost={'127,002,174'} percentColor={'#BE4545'} name={'Bitcoin'}/>
                            <SearchingNowItem percent={'2.62'} cost={'127,002,174'} percentColor={'#4ACB6E'} name={'Bitcoin'}/>
                            <SearchingNowItem percent={'-3.18'} cost={'127,002,174'} percentColor={'#BE4545'} name={'Bitcoin'}/>
                            <SearchingNowItem percent={'-3.18'} cost={'127,002,174'} percentColor={'#BE4545'} name={'Bitcoin'}/>
                            <SearchingNowItem percent={'2.62'} cost={'127,002,174'} percentColor={'#4ACB6E'} name={'Bitcoin'}/>
                            <SearchingNowItem percent={'-3.18'} cost={'127,002,174'} percentColor={'#BE4545'} name={'Bitcoin'}/>
                            <SearchingNowItem percent={'-3.18'} cost={'127,002,174'} percentColor={'#BE4545'} name={'Bitcoin'}/>
                            <SearchingNowItem percent={'2.62'} cost={'127,002,174'} percentColor={'#4ACB6E'} name={'Bitcoin'}/>
                        </View>
                    </View>
                </View>
            </ScrollView>

        </View>
            <View className="w-screen absolute bottom-0 m-0 left-0">
                <NavBar/>
            </View>
      </View>
  );
}
