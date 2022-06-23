// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
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
export const auth = getAuth(app);

export const useAuthListener = () => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem("authUser", JSON.stringify(user));
        setCurrentUser(user);
      } else {
        localStorage.removeItem("authUser");
        setCurrentUser(null);
      }
    });
  }, []);

  return { currentUser };
};

export const signUp = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.log(err);
  }
};
