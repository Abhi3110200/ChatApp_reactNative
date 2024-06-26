import { View, Text, ActivityIndicator } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { firebaseAuth, firestoreDB } from "../config/firebase.config";
import { doc, getDoc } from "firebase/firestore";
import { SET_USER } from "../context/actions/userActions";
import { useDispatch } from "react-redux";

const SplashScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    checkLoggedUser();
  }, []);

  const checkLoggedUser = async () => {
    firebaseAuth.onAuthStateChanged((userCred) => {
      if (userCred?.uid) {
        getDoc(doc(firestoreDB, "users", userCred.uid)).then(
          (docSnap) => {
            if (docSnap.exists()) {
              console.log(docSnap.data());
              dispatchEvent(SET_USER(docSnap.data()));
              
            }
          }
        )
        .then(()=>{
            setTimeout(()=>{
                navigation.replace("HomeScreen");
            },2000)
        });
      } else {
        navigation.replace("LoginScreen");
      }
    });
  };
  return (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator size={"large"} color={"blue"} />
    </View>
  );
};

export default SplashScreen;
