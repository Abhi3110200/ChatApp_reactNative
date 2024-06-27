import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screen/LoginScreen";
import SignUpScreen from "../screen/SignUpScreen";
import HomeScreen from "../screen/HomeScreen";
import SplashScreen from "../screen/SplashScreen";
import { initializeApp } from 'firebase/app';
import AddToChatScreen from "../screen/AddToChatScreen";

const Stack = createNativeStackNavigator();
export default function AppNavigation() {
  return (
    <NavigationContainer>
   
        <Stack.Navigator screenOptions={{ headerShown: false, }}>
          <Stack.Screen name='SplashScreen' component={SplashScreen}/>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="AddToChatScreen" component={AddToChatScreen}/>
        </Stack.Navigator>

    </NavigationContainer>
  );
}
