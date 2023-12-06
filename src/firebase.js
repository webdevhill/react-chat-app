// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7_kBKEGnDobfdneQBdByFeLJArijP8mo",
  authDomain: "chat-fd013.firebaseapp.com",
  projectId: "chat-fd013",
  storageBucket: "chat-fd013.appspot.com",
  messagingSenderId: "858911193519",
  appId: "1:858911193519:web:7f8b332c3c1c856644175a",
  measurementId: "G-8QE2198GZQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
