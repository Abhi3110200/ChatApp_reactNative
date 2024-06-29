import { View,TouchableOpacity,Image, TextInput, KeyboardAvoidingView, Platform, ScrollView, ActivityIndicator} from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Text } from 'react-native';

const ChatScreen = ({route}) => {
    const {room}=route.params;
    console.log('Room : ',room)
    const navigation = useNavigation();
    const [isLoading,setIsLoading] = useState(true)
  return (
    <View className='flex-1'>
      <View className='w-full bg-blue-500 px-4 py-6 flex-[0.1] rounded-[20px]'>
        <View className='px-3 py-6 flex-row items-center justify-between w-full'>
            <View className='flex-row items-center space-x-3'>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <AntDesign name="arrowleft" size={24} color="white" />
            </TouchableOpacity>

            <View className='flex-row items-center justify-center space-x-3'>
                {/* <View className='rounded-full border p-2 border-white flex items-center justify-center'>
                <FontAwesome5 name="user-friends" size={18} color="#fbfbfb" />
                </View> */}
                <View>
                    <Text className='capitalize font-semibold text-base text-gray-50'>{room.chatName.length>16 ? `${room.chatName.slice(0,16)}..` : room.chatName}{" "}</Text>
                    <Text className='text-sm text-gray-100 font-semibold capitalize'>online</Text>
                </View>
            </View>
            </View>

            <View className='flex-row space-x-3 justify-center items-center'>
                <TouchableOpacity>
                <Ionicons name="videocam" size={20} color="#fbfbfb" />
                </TouchableOpacity>
                <TouchableOpacity>
                <FontAwesome6 name="phone" size={16} color="#fbfbfb" />
                </TouchableOpacity>
            </View>
        </View>

      </View>

      <View className='w-full px-4 flex-1'>
        <KeyboardAvoidingView className='flex-1' behavior={Platform.OS === 'android'? 'padding' : 'height'} keyboardVerticalOffset={160}>
            <>
                <ScrollView>
                    {isLoading ? (
                    <>
                            <View className='w-full flex items-center justify-center mt-2'>
                                <ActivityIndicator size={'large'} color={'blue'}/>
                            </View>
                        </>
                    ):(
                        <></>
                    )}
                </ScrollView>

                <View className='w-full flex-row items-center justify-center px-8'>
                    <View className='bg-gray-200 rounded-2xl px-4 py-2'>
                        <TouchableOpacity>

                        </TouchableOpacity>
                        <TextInput
                        placeholder='Type Here...'
                        className='flex-1 h-8'/>
                    </View>
                </View>
            </>
        </KeyboardAvoidingView>
        

      </View>
    </View>
  )
}

export default ChatScreen