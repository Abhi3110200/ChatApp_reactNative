import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { doc, setDoc } from 'firebase/firestore';
import { firestoreDB } from '../config/firebase.config';
const AddToChatScreen = () => {
    const navigation = useNavigation();
    const [addChat, setAddChat] = useState("");
    const user = useSelector((state)=>state.user.user);
    const createNewChat=async()=>{
      let id = `${Date.now()}`

      const _doc = {
        _id:id,
        user:user,
        chatName:addChat,
      }

      if(addChat!==""){
        setDoc(doc(firestoreDB,"chats", id), _doc).then(()=>{
          setAddChat("");
          navigation.replace('HomeScreen');
        })
        .catch((err)=>{
          alert("Error : ",err);
        })
      }
    }
   
  return (
    <View className='flex-1'>
      <View className='w-full bg-blue-500 px-6 py-6 flex-[0.15] rounded-b-[15px]'>
        <View className='flex-row items-center justify-between w-full py-5'>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="white" />
            </TouchableOpacity>

            <View className='flex-row items-center justify-center'>
              <Image source={require('../assets/man1.jpg')} alt='' className='h-12 w-12  rounded-full' resizeMode='contain'/>
            </View>
        </View>
      </View>

      <View>
        <View className='w-full py-4 px-4'>
          <View className='flex-row w-full items-center justify-between rounded-xl border px-4 py-3 border-gray-200 space-x-3'>
          <Ionicons name="chatbubbles" size={18} color="#777" />
          <TextInput placeholder='Create a chat' placeholderTextColor={'#999'} className='flex-1 text-md w-full h-8' value={addChat}
          onChangeText={(text)=>setAddChat(text)}/>
          <TouchableOpacity onPress={createNewChat}>
          <FontAwesome name="send" size={18} color="#777" />
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default AddToChatScreen