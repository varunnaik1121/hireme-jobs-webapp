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

import {
  arrayUnion,
  collection,
  doc,
  onSnapshot,
  setDoc,
  arrayRemove,
} from "firebase/firestore";
import { db } from "../services/firebase";
const Context = createContext();

export const UserProvider = ({ children }) => {
  const { currentUser } = useAuthListener();
  const [loading, setLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

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

  const addToFavourites = async (jobId) => {
    const userId = currentUser?.uid;
    toast.success("Added To Favourites");
    await setDoc(
      doc(db, "users", userId),
      {
        favourites: arrayUnion(jobId),
      },
      { merge: true }
    ).catch((err) => {
      toast.error("something went wrong");
    });
  };

  const removeFromFavourites = async (jobId) => {
    const userId = currentUser?.uid;
    toast.success("Removed From Favourites");
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

  return (
    <Context.Provider
      value={{
        loading,
        signUp,

        setLoading,
        isFormSubmitted,
        setIsFormSubmitted,

        logIn,
        logOut,
        logInWithGoogle,
        addToFavourites,
        removeFromFavourites,
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
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);

    const collectionRef = collection(db, path);

    const unsub = onSnapshot(collectionRef, (snapshot) => {
      setData(
        snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
      setLoading(false);
    });

    return unsub;
  }, [path]);
  return { data, loading };
};

/*const handleSubmit = async () => {
  const addImages = async () => {
    images.forEach((file) => {
      const storageRef = ref(storage, `images/${file.name}`);
      uploadBytes(storageRef, file).then(() => {
        getDownloadURL(storageRef);
      });
    });
    console.log(urls);
  };

  addImages();

  // const addComapnyDetails = async () => {
  //   const payload = {
  //     name: formDetails.name,
  //     headquatar: formDetails.headquatar,
  //     about: formDetails.about,
  //     benefits: formDetails.benefits,
  //     industry: formDetails.industry,
  //     website: formDetails.website,
  //     type: formDetails.type,
  //     specialities: formDetails.specialities,
  //     timestamp: serverTimestamp(),
  //     isVerified: false,
  //     image: urls,
  //   };
  //   await addDoc(collectionRef, payload);
  // };

  // await awaitedPush(callback);
};*/
