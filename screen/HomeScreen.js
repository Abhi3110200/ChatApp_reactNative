import { View, Text, SafeAreaView, ScrollView, Touchable, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesome6 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
const HomeScreen = () => {
  const user = useSelector((state) => state.user.user);
  const [isLoading, setIsLoading]=useState(false);
  const navigation = useNavigation();
  console.log("Logged user: ",user);
  return (
    <View className="flex-1">
      <SafeAreaView className="mt-7">
        <View className="w-full px-4 p-4 flex-row items-center justify-between">
          <Text className="text-2xl font-semibold ">Hey {user?.fullName} 👋</Text>
          <View className='flex-row gap-2  justify-center  items-center'>
            <TouchableOpacity className=" bg-blue-600 p-2.5 rounded-full">
              <FontAwesome6 name="camera" size={16} color="white" />
            </TouchableOpacity>
            <TouchableOpacity className='border border-blue-500 p-2 rounded-full'>
              <Feather name="share" size={16} color="blue" />
            </TouchableOpacity>
          </View>
        </View>
        <View className=' h-0.5 bg-gray-200'/>
        <ScrollView className='w-full px-4 mt-2' showsVerticalScrollIndicator={false}>
          <View className='w-full'>
            <View className='w-full flex-row items-center justify-between'>
              <Text className='text-base font-semibold text-gray-400'>Message</Text>
              <TouchableOpacity onPress={()=>navigation.navigate('AddToChatScreen')}>

              <Entypo name="message" size={16} color="gray" />
              </TouchableOpacity>
            </View>

            {isLoading ? (
              <>  
                <View className='w-full flex items-center justify-center'>
                  <ActivityIndicator size={'large'} color={'blue'}/>
                </View>
              </>
            ):(
              <>
              <MessageCard/>
              <MessageCard/>
              <MessageCard/>
              <MessageCard/>
              <MessageCard/>
              <MessageCard/>
              <MessageCard/>
              <MessageCard/>
              <MessageCard/>
              <MessageCard/>
              </>
            )}
          </View>

        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const MessageCard =()=>{
  return (
    <TouchableOpacity className='w-full flex-row items-center justify-start py-2'>
      {/* {images} */}
      <View className='h-16 w-16 rounded-full flex border-2 border-blue-500 items-center justify-center p-1'>
      <FontAwesome5 name="user-alt" size={20} color="blue" />
      </View>
      {/* content */}
      <View className='flex-1 flex items-start justify-center ml-4'>
        <Text className='text-gray-500 font-bold text-base capitalize'>Message Title</Text>
        <Text className='text-gray-400 text-sm'>Hey, i am there i whatsApp</Text>
      </View>
      {/* time text */}

      <Text className='text-blue-500 text-base font-semibold'>27 min</Text>
    </TouchableOpacity>
  );
}

export default HomeScreen;
