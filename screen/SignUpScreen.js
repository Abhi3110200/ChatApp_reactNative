import {
  View,
  Text,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth, firestoreDB } from "../config/firebase.config";
import { doc, setDoc } from "firebase/firestore";
const SignUpScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleSignUp = async () => {
    if (email !== "") {
      await createUserWithEmailAndPassword(firebaseAuth, email, password).then(
        (userCred) => {
          const data = {
            _id: userCred.user.uid,
            fullName: name,
            email: email,
            providerData: userCred.user.providerData[0],
          };

          setDoc(doc(firestoreDB, "users", userCred?.user.uid), data).then(
            () => {
              navigation.navigate("LoginScreen");
            }
          );
        }
      );
    }
  };
  return (
    <View className="flex-1 pt-10 px-5">
      <Text className="text-2xl font-medium mt-10">Create your account</Text>
      <View className="w-full flex-1 mt-10">
        <TextInput
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
          className="px-3 py-2 rounded-xl w-full bg-gray-200 mb-5"
        />
        <TextInput
          placeholder="Email address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          className="px-3 py-2 rounded-xl w-full bg-gray-200 mb-5"
        />
        <View className="relative">
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            className="px-3 py-2 rounded-xl w-full bg-gray-200"
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-4 items-center justify-center"
          >
            <Ionicons
              name={showPassword ? "eye" : "eye-off"}
              size={16}
              color="gray"
            />
          </TouchableOpacity>
        </View>

        {/* <Text className="mt-3 text-right text-blue-800 font-medium mr-2">
          Forgot your password?
        </Text> */}

        <TouchableOpacity
          onPress={handleSignUp}
          className="bg-blue-600 items-center py-3 rounded-2xl mt-10"
        >
          <Text className="text-white font-medium text-md">Sign in</Text>
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

        <View className="flex flex-col mt-[125]">
          <Text className="text-center mb-2 text-gray-400">
            Already have an account?
          </Text>
          <TouchableOpacity
            className="border-2 border-blue-500 items-center py-3 rounded-2xl"
            onPress={() => navigation.navigate("LoginScreen")}
          >
            <Text className="text-blue-500 font-medium">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;
