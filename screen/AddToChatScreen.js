import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const AddToChatScreen = () => {
    const navigation = useNavigation();
  return (
    <View className='flex-1'>
      <View className='w-full bg-blue-500 px-6 py-6 flex-[0.2]'>
        <View className='flex-row items-center justify-between w-full py-5'>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="white" />
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default AddToChatScreen