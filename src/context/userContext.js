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
import { auth, useAuthListener } from "../services/firebase";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

import {
  arrayUnion,
  collection,
  doc,
  onSnapshot,
  setDoc,
  arrayRemove,
  deleteDoc,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { db } from "../services/firebase";
const Context = createContext();

export const UserProvider = ({ children }) => {
  const { currentUser } = useAuthListener();
  const [loading, setLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [IsOpenApplyModal, setIsOpenApplyModal] = useState(false);
  const [isCompany, setIsCompany] = useState(false);
  const [applications, setApplications] = useState(null);
  const [homeLoading, setHomeLoading] = useState(false);
  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({ prompt: "select_account" });

  useEffect(() => {
    let unsub;
    if (currentUser) {
      setHomeLoading(true);

      const q = query(
        collection(db, "verifiedCompanies"),
        where("companyId", "==", currentUser?.uid)
      );
      unsub = onSnapshot(q, (snapshot) => {
        let companyStatus = snapshot.docs.map((doc) => doc.data()).length > 0;
        setIsCompany(companyStatus);
        setHomeLoading(false);
      });
    }

    return unsub;
  }, [currentUser]);

  //for fetching the applications of companies
  useEffect(() => {
    let unsub;
    if (currentUser) {
      const collectionRef = collection(db, "jobApplications");
      const q = query(
        collectionRef,
        where("companyId", "==", currentUser?.uid)
      );
      unsub = onSnapshot(q, (snapshot) => {
        setApplications(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      });
    }
    return unsub;
  }, [currentUser]);

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

  const addToFavourites = async (jobId) => {
    const userId = currentUser?.uid;
    toast.success("Added To Favourites", {
      duration: 1500,
    });
    await setDoc(
      doc(db, "users", userId),
      {
        favourites: arrayUnion(jobId),
      },
      { merge: true }
    ).catch((err) => {
      toast.error("something went wrong");
      console.log(err);
    });
  };

  const removeFromFavourites = async (jobId) => {
    const userId = currentUser?.uid;
    toast.success("Removed From Favourites", {
      duration: 1500,
    });
    await setDoc(
      doc(db, "users", userId),
      {
        favourites: arrayRemove(jobId),
      },
      { merge: true }
    ).catch((err) => {
      toast.error("something went wrong");
    });
  };

  const openApplyModal = () => {
    setIsOpenApplyModal(true);
  };
  const closeApplyModal = () => {
    setIsOpenApplyModal(false);
  };

  const deleteDataById = async (id, path, callback, message) => {
    try {
      await deleteDoc(doc(db, path, id));
      toast.success(message, {
        delay: 0,
      });
      callback();
    } catch (err) {
      toast.error("something went wrong!!");
    }
  };

  return (
    <Context.Provider
      value={{
        loading,
        signUp,
        setLoading,
        isFormSubmitted,
        setIsFormSubmitted,
        currentUser,
        logIn,
        logOut,
        logInWithGoogle,
        addToFavourites,
        removeFromFavourites,
        IsOpenApplyModal,
        setIsOpenApplyModal,
        openApplyModal,
        closeApplyModal,
        deleteDataById,
        isCompany,
        homeLoading,
        applications,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useGlobalUser = () => {
  return useContext(Context);
};

export const useDbFetch = (path) => {
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en-US");

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    const currTime = Date.now();
    console.log(currTime);

    const collectionRef = collection(db, path);
    const q = query(collectionRef, orderBy("timestamp", "desc"));

    const unsub = onSnapshot(q, (snapshot) => {
      setData(
        snapshot.docs.map((doc) => {
          let data = doc.data();
          let time = timeAgo.format(data.timestamp.seconds * 1000);
          return { ...doc.data(), id: doc.id, time };
        })
      );
      setLoading(false);
    });

    return unsub;
  }, [path]);
  return { data, loading };
};
