// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUNHryff2oYXYFk7n5xL2F-QzLnxLL1ZI",
  authDomain: "react-native-login-cb4de.firebaseapp.com",
  projectId: "react-native-login-cb4de",
  storageBucket: "react-native-login-cb4de.appspot.com",
  messagingSenderId: "8520597390",
  appId: "1:8520597390:web:293b42fd4b9adbb34aeedf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
