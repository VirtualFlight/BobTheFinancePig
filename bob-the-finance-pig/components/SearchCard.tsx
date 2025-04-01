import {View, Text, StyleSheet, Pressable} from 'react-native';
import { useRouter } from 'expo-router';

export default function SearchCard() {
    const router = useRouter();
    return (
        <View className="flex-row justify-center h-4/5 border-2 border-purple-500">
          <View className='border-2 border-red-500 w-3/4 items-center h-4/5'>
                <Text className='text-white text-xl'>Top Gainer</Text>
          </View>
      </View>
  
    );
  } 

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111111',
    },
    cardContainer: {
        flex: 1,
        justifyContent: 'center',
        
    }
  })