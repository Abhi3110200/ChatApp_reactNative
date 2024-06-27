import {
  View,
  Text,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth, firestoreDB } from "../config/firebase.config";
import { doc, getDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { SET_USER } from "../context/actions/userActions";
const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertMeassage, setAlertMessage] = useState(null);
  const handleLogin = async () => {
    if (email !== "") {
      await signInWithEmailAndPassword(firebaseAuth, email, password)
        .then((userCred) => {
          if (userCred) {
            console.log("User Id", userCred?.user.uid);
            getDoc(doc(firestoreDB, "users", userCred?.user.uid)).then(
              (docSnap) => {
                if (docSnap.exists()) {
                  console.log("User Data", docSnap.data());
                  dispatch(SET_USER(docSnap.data()));
                }
                navigation.navigate("HomeScreen");
              }
            );
          }
          
        })
        .catch((err) => {
          console.log(err.message);
          if(err.message.includes('wrong-password')){
            setAlert(true);
            setAlertMessage('Password Mismatched');
          }
          else if(err.message.includes('user-not-found')){
            setAlert(true);
            setAlertMessage('User Not Found');
          }
          else{
            setAlert(true);
            setAlertMessage('Invalid Email Address')
          }

          setInterval(()=>{
            setAlert(false);
          },4000)
        });
    }
  };
  return (
    <ScrollView className="flex-1 pt-5 px-5">
      <Text className="text-2xl font-medium mt-10">Log in to your account</Text>
      <View className="flex-1 mt-10">
        {alert && (
          <Text className="text-sm text-red-600 text-center -top-3">{alertMeassage}</Text>
        )}
        <TextInput
          placeholder="Email address"
          value={email}
          keyboardType="email-address"
          onChangeText={setEmail}
          className="px-3 py-2 rounded-xl w-full bg-gray-200 mb-5"
        />
        <TextInput
          placeholder="Password"
          value={password}
          secureTextEntry={!showPassword}
          onChangeText={setPassword}
          className="px-3 py-2 rounded-xl w-full bg-gray-200"
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-20 items-center justify-center"
        >
          <Ionicons
            name={showPassword ? "eye" : "eye-off"}
            size={16}
            color="gray"
          />
        </TouchableOpacity>

        <Text className="mt-3 text-right text-blue-800 font-medium mr-2">
          Forgot your password?
        </Text>

        <TouchableOpacity
          onPress={handleLogin}
          className="bg-blue-600 items-center py-3 rounded-2xl mt-10"
        >
          <Text className="text-white font-medium text-md">Log in</Text>
        </TouchableOpacity>

        <Text className="mt-10 text-center text-gray-400 font-medium">OR</Text>

        <View className="flex flex-row mt-10 items-center justify-center space-x-10">
          <View className="p-2 border  border-gray-400 rounded-full">
            <AntDesign name="google" size={16} color="black" />
          </View>
          <View className="p-2 border border-gray-400 rounded-full">
            <FontAwesome5 name="facebook" size={16} color="black" />
          </View>
        </View>

        <View className="flex flex-col mt-40">
          <Text className="text-center mb-2 text-gray-400">
            Don't have an account?
          </Text>
          <TouchableOpacity
            className="border-2 border-blue-500 items-center py-3 rounded-2xl"
            onPress={() => navigation.navigate("SignUpScreen")}
          >
            <Text className="text-blue-500 font-medium">Regsiter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
