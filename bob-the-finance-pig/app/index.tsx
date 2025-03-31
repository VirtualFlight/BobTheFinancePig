import LoginButton from "@/components/LoginButton";
import { Link } from "expo-router";
import { Text, View, ScrollView, StyleSheet, Image } from "react-native";
// import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";


export default function Index() {
  return (
    <ScrollView style={styles.main}>

      <View className="border-4 border-indigo-100">
        <Image  source={require('@/assets/images/bob-image.png')}/>
      </View>

      <View style={styles.mainButtonContainer}>
        <Link href="/login" dismissTo asChild>
    
          <LoginButton borderColor={'white'} backgroundColor={'white'} textColor={'black'} textMessage={'Login'} ></LoginButton>
        </Link>
        <LoginButton borderColor={'white'} backgroundColor={'black'} textColor={'white'} textMessage={'Register'}></LoginButton>
      </View>
    </ScrollView>
  );


}

const styles = StyleSheet.create({
  mainButtonContainer:{
    gap: 16,
  },

  main:{
    paddingLeft: 12,
    paddingRight: 12,
  },



  

  
});