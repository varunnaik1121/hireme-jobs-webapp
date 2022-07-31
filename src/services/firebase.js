// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useState, useEffect } from "react";
import { getStorage } from "firebase/storage";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-hot-toast";

const firebaseConfig = {
  apiKey: "AIzaSyCWgHYBRMUjMDCkVj9EkfOixBF57ptbN6E",
  authDomain: "hireme-d514e.firebaseapp.com",
  projectId: "hireme-d514e",
  storageBucket: "hireme-d514e.appspot.com",
  messagingSenderId: "177751204100",
  appId: "1:177751204100:web:a7b25819f7a0810da47051",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);

export const useAuthListener = () => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem("authUser", JSON.stringify(user));
        setCurrentUser(user);
      } else {
        localStorage.removeItem("authUser");
        setCurrentUser(null);
      }
    });
    return () => {
      unsub();
    };
  }, []);

  return { currentUser };
};

export const Login = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};
