import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgkNlsTKQylo7XLkvRmVe4RwOMMm39kd4",
  authDomain: "auth-react-7930a.firebaseapp.com",
  projectId: "auth-react-7930a",
  storageBucket: "auth-react-7930a.appspot.com",
  messagingSenderId: "560176693661",
  appId: "1:560176693661:web:e61b2cf574101056b2ef74",
  measurementId: "G-86C9BX52QG",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
