import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import "../Home/Home.css";
import { useGlobalUser } from "../../context/userContext";
import { UserContext } from "../../context/useUser";
import AnimatedPage from "../AnimatedPage";

import Header from "../Header/Header";



export const Home = () => {

  const { logOut } = useGlobalUser();

  const handleLogOut = () => {
    logOut();
  };

  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    console.count("home page");
  }, []);

  useEffect(() => {
    toast.dismiss();
    if (currentUser) {
      toast.success("logged in as " + currentUser?.email, {
        duration: 2000,
      });
    }
  }, [currentUser]);

  return (
    <AnimatedPage>
      <Header logOut={handleLogOut} />
    </AnimatedPage>
  );
};
