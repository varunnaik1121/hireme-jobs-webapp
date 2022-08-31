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
const Home = () => {

  const [isCompany, setIsCompany] = useState(false);
  const [loading, setLoading] = useState(false);

  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    console.count("home page");
  }, []);

  useEffect(() => {
    setLoading(true);
    const getCompanyId = async () => {
      const q = query(
        collection(db, "verifiedCompanies"),
        where("companyId", "==", currentUser?.uid)
      );
      const data = await getDocs(q);
      const companyStatus = data.docs.map((doc) => doc.data()).length > 0;
      setIsCompany(companyStatus);
      setLoading(false);
    };
    getCompanyId();
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
      <Navbar isCompany={isCompany} loading={loading} />
      <Divider />
      <Content isCompany={isCompany}/>
    </AnimatedPage>
  );
};

export default AppWrap(Home);
