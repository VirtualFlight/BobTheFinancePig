import {View, Text, StyleSheet, Pressable} from 'react-native';
import { useRouter } from 'expo-router';

import NetflixIcon from "../assets/images/ri_netflix-fill.svg";
import UpvoteIcon from "../assets/images/bx_upvote.svg";
import DownvoteIcon from "../assets/images/bx_downvote.svg";


export default function HumanRecommendation() {
  const router = useRouter();
  return (
    <View className='py-2 px-2 rounded-lg bg-[#1A1A1A] gap-1'>

        <View className='flex-row border-b-2 border-[#262626] px-1'>

            <View className='flex-row gap-1'>
                <View className='items-center justify-center gap-1'>
                    <UpvoteIcon width={12} height={12}></UpvoteIcon>
                    <Text className='text-white text-[4px]'>300</Text>
                </View>

                <View className='items-center justify-center gap-1'>
                    <DownvoteIcon width={12} height={12}></DownvoteIcon>
                    <Text className='text-white text-[4px]'>60</Text>
                </View>
            </View>

            <View className='flex-row'>
                <View>

                    <NetflixIcon></NetflixIcon>
                </View>
                <View className='flex-row justify-between items-center gap-5'>
                    <Text className='text-white text-[8px]'>NFLX</Text>
                    <Text className='text-white text-[8px]'>1,017.40</Text>
                </View>
            </View>
        </View>

        <View className='px-1'>
            <Text className='text-white text-[8px]' >Alextheboss:</Text>
            <Text className='text-white text-[4px] break-words flex-shrink'>I love netflix</Text>
        </View>


    </View>

  );
}



