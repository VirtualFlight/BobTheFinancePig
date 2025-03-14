import LoginButton from "@/components/LoginButton";
import { Text, View, ScrollView, StyleSheet, Image } from "react-native";
// import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";

export default function Index() {
  return (
    <ScrollView style={styles.main}>

      {/* <View>
        <Image source={require('@/assets/images/partial-react-logo.png')}/>
      </View> */}

      <View style={styles.mainButtonContainer}>
        <LoginButton borderColor={'white'} backgroundColor={'white'} textColor={'black'} textMessage={'Login'}></LoginButton>
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