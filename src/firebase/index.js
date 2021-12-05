// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf7p3wr1mGypafZKqecfS6LadLLYISkxo",
  authDomain: "daaru-partner-bar.firebaseapp.com",
  projectId: "daaru-partner-bar",
  storageBucket: "daaru-partner-bar.appspot.com",
  messagingSenderId: "178718170687",
  appId: "1:178718170687:web:18faa4875f132083f3e28a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// initialize db
const db = getFirestore();

export { app, db };
