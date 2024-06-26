import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { FontAwesome6 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
const HomeScreen = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <View className="flex-1">
      <SafeAreaView className="mt-7">
        <View className="w-full px-4 p-4 flex-row items-center justify-between">
          <Text className="text-2xl font-semibold ">Hey Abhijeet 👋</Text>
          <View className='flex-row gap-2  justify-center  items-center'>
            <View className=" bg-blue-600 p-2.5 rounded-full">
              <FontAwesome6 name="camera" size={16} color="white" />
            </View>
            <View className='border border-blue-500 p-2 rounded-full'>
              <Feather name="share" size={16} color="blue" />
            </View>
          </View>
        </View>
        <View className=' h-0.5 bg-gray-200'/>
        <ScrollView className='w-full px-4 mt-2'>
          <View className='w-full'>
            <View className='w-full flex-row items-center justify-between'>
              <Text className='text-base font-semibold text-gray-400'>Message</Text>
              <Entypo name="message" size={16} color="gray" />
            </View>
          </View>

        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
