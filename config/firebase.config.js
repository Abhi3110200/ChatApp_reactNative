import {getApp, getApps, initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDHyVWgkvT0G8KzdgA3bo2Dgg0VM4zcJrQ",
  authDomain: "chat-app-8657f.firebaseapp.com",
  projectId: "chat-app-8657f",
  storageBucket: "chat-app-8657f.appspot.com",
  messagingSenderId: "38746546913",
  appId: "1:38746546913:web:50a2eb0bcf8284f9cd8da0",
  measurementId: "G-8NF89C1MHV"
};

const app =getApps.length>0? getApp(): initializeApp( firebaseConfig );
const firebaseAuth = getAuth(app);
const firestoreDB = getFirestore(app);

export {app, firebaseAuth, firestoreDB};