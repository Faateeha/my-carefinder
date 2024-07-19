// src/app/firebase.tsx
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl4w9mqZPeQnFHFXA9VjYmJIxg0aBGatg",
  authDomain: "my-carefinder.firebaseapp.com",
  projectId: "my-carefinder",
  storageBucket: "my-carefinder.appspot.com",
  messagingSenderId: "673984547914",
  appId: "1:673984547914:web:2e518190f39bffdf34eab3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);