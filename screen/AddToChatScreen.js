import { View, Text } from 'react-native'
import React from 'react'

const AddToChatScreen = () => {
  return (
    <View className='flex-1'>
      <View className='w-full bg-blue-500 px-6 py-6 flex-[0.2]'>
        <Text className='text-white text-2xl font-bold'>Add to Chat</Text>
      </View>
    </View>
  )
}

export default AddToChatScreen