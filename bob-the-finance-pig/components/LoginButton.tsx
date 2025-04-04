import {View, Text, StyleSheet, Pressable} from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginButton({borderColor, backgroundColor, textColor, textMessage, path}) {
  const router = useRouter();
  return (
    
    <Pressable onPress={() => router.navigate(path)} style={[styles.loginButtonContainer, {borderColor, backgroundColor}]}>
        <Text style={[styles.text, {color: textColor}]}> {textMessage} </Text>
    </Pressable>

  );
}

const styles = StyleSheet.create({
  text:{
    fontSize: 16,
  },

  loginButtonContainer:{
    // color: 'white',
    height: 64,
    borderWidth: 2,
    borderRadius: 10,
    // borderColor: 'white',
    backgroundColor: 'white', 
    alignItems: 'center',
    justifyContent: 'center',

    // padding: 10,
  },



  

  
});

