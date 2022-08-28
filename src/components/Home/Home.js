import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import "../Home/Home.css";
import { useGlobalUser } from "../../context/userContext";
import { UserContext } from "../../context/useUser";
import AnimatedPage from "../AnimatedPage";
import Content from "./Content";
import NavigationBar from "./NavigationBar";
import Navbar from "../Header/Navbar";
import { Divider, Box } from "@mui/material";
import FeaturedJobs from "./FeaturedJobs";
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
      <Navbar />
      <Divider />
      <Content />

      <NavigationBar />
    </AnimatedPage>
  );
};
