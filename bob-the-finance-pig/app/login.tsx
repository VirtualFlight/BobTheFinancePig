import LoginButton from "@/components/LoginButton";
import { Link } from "expo-router";
import { Text, View, ScrollView, StyleSheet, Image } from "react-native";
// import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";

export default function Login() {
  return (
    <ScrollView style={styles.main}>
        <View>  
            <Text style={styles.text}>Login page</Text>
        </View>

        <Link href="/" style={styles.text}> Going back</Link>
    </ScrollView>
  );


}

const styles = StyleSheet.create({
 
  main:{
    paddingLeft: 12,
    paddingRight: 12,
  },

  text:{
    color: 'white',
  },

  

  
});