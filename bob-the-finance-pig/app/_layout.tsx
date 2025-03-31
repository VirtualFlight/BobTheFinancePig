import { DarkTheme, ThemeProvider, DefaultTheme} from "@react-navigation/native";
import { Stack } from "expo-router";
import { useColorScheme } from 'react-native';
import "../global.css"

export default function RootLayout() {
  const colorScheme = useColorScheme();
  
  
  return (

  <ThemeProvider value={colorScheme==='dark'? DarkTheme: DefaultTheme}>

    <Stack screenOptions={{headerShown:false,}}>
      <Stack.Screen name="index"></Stack.Screen>
    </Stack>
  </ThemeProvider>
  );
}
