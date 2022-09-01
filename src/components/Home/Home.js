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
import AppWrap from "../HigherOrderComp/Wrapper";
import Navbar from "../Header/Navbar";
import { Divider, Box } from "@mui/material";
import FeaturedJobs from "./FeaturedJobs";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase";
import { useState } from "react";
import Footer from "../Footer/Footer";
const Home = () => {
  const { currentUser } = useContext(UserContext);
  const { isCompany } = useGlobalUser();

  useEffect(() => {
    console.count("home page");
  }, []);

  if (isCompany) {
    console.log(isCompany);
  }

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
      {/* <Navbar isCompany={isCompany} loading={loading} /> */}
      <Divider />
      <Content isCompany={isCompany} />
      {/* <Footer /> */}
    </AnimatedPage>
  );
};

export default AppWrap(Home);
