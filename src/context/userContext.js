import React from "react";
import { useState, useContext, createContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../services/firebase";
import { toast } from "react-hot-toast";

const Context = createContext();

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });

  //function related to user login

  const signUp = async (email, password, username, reset2) => {
    const signUpToastId = toast.loading("loading...");
    setLoading(true);
    toast.loading("signing up ...", {
      id: signUpToastId,
    });
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.remove(signUpToastId);
      toast.success("signup successfull");

      updateProfile(auth.currentUser, {
        displayName: username,
      })
        .then(() => {
          console.log("display name updated");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      setLoading(false);
      toast.remove(signUpToastId);
      toast.error("username exist");

      reset2({
        signUpEmail: "",
        signUpPassword: "",
        signUpUsername: "",
      });
    }
    setLoading(false);
  };

  const logIn = async (email, password) => {
    setLoading(true);
    const signInToastId = toast.loading("signning in...");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.dismiss(signInToastId);
      toast.success(
        "logged in as " + auth.currentUser.email ||
          auth.currentUser?.displayName
      );

      setLoading(false);
    } catch (err) {
      toast.error("invalid email and password");
      toast.dismiss(signInToastId);
    }
    setLoading(false);
  };

  const logOut = async () => {
    setLoading(true);
    try {
      await signOut(auth);
    } catch (err) {
      toast.error("something went wrong");
    }
    setLoading(false);
  };

  const logInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  return (
    <Context.Provider
      value={{ loading, signUp, setLoading, logIn, logOut, logInWithGoogle }}
    >
      {children}
    </Context.Provider>
  );
};

export const useGlobalUser = () => {
  return useContext(Context);
};
