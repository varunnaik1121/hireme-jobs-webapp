import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import "../Home/Home.css";
import { useGlobalUser } from "../../context/userContext";
import { UserContext } from "../../context/useUser";
import AnimatedPage from "../AnimatedPage";
import Content from "./Content";

import AppWrap from "../HigherOrderComp/Wrapper";

import { Divider } from "@mui/material";

const Home = () => {
  const { currentUser } = useContext(UserContext);
  const { isCompany } = useGlobalUser();

  useEffect(() => {
    console.count("home page");
  }, []);

  if (isCompany) {
    console.log({ isCompany });
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
      <Divider />
      <Content isCompany={isCompany} />
    </AnimatedPage>
  );
};

export default AppWrap(Home);
