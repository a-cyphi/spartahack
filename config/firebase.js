// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9Sf6kY9d6rETLeHAUxGKkLFJF5XT9t4o",
  authDomain: "tabbi-de60f.firebaseapp.com",
  projectId: "tabbi-de60f",
  storageBucket: "tabbi-de60f.appspot.com",
  messagingSenderId: "268975867757",
  appId: "1:268975867757:web:1ddade585191958c5a3c64",
  measurementId: "G-ZP7JKVV3YB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app);
export const googleProvider=new GoogleAuthProvider();