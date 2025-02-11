
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-412fc.firebaseapp.com",
  projectId: "reactchat-412fc",
  storageBucket: "reactchat-412fc.firebasestorage.app",
  messagingSenderId: "986864621947",
  appId: "1:986864621947:web:43ccca34d0de78214645de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()