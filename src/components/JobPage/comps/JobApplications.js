import { Box, Divider, Paper, Typography } from "@mui/material";
import React from "react";
import UsersRequestCard from "./UsersRequestCard";
import { toast } from "react-hot-toast";
import { styled } from "@mui/system";
import { useState } from "react";
import { useEffect } from "react";
import { collection, onSnapshot, where, query } from "firebase/firestore";
import { db } from "../../../services/firebase";
import { useGlobalUser } from "../../../context/userContext";
import Loading from "../../Loading/Loading";
import { useNavigate } from "react-router-dom";
const JobApplications = () => {
  const { currentUser } = useGlobalUser();
  const [loading, setLoading] = useState(false);
  const [applications, setApplications] = useState(null);
  console.log(loading, { applications });

  console.log("this is applications");
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, []);
  useEffect(() => {
    setLoading(true);
    const collectionRef = collection(db, "jobApplications");
    try {
      const q = query(
        collectionRef,
        where("companyId", "==", currentUser?.uid)
      );
      var unsub = onSnapshot(q, (snapshot) => {
        setApplications(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
        setLoading(false);
      });
    } catch (err) {
      console.log(err);
      toast.error("something went wrong");
    }
    return () => unsub();
  }, []);
  const StyledBox = styled(Box)({
    flex: 1,
    // padding: "0 10px",
    fontSize: "12px",
    fontWeight: 500,
    textTransform: "uppercase",
    color: "#696a6c",
    margin: "20px 30px",
  });

  if (applications?.length === 0) {
    return (
      <Box sx={{ marginTop: "20px", minHeight: "100vh" }}>No Data found</Box>
    );
  }

  return (
    <Box
      sx={{
        width: "100vw",

        minHeight: "100vh",
        backgroundColor: "#f6f7f9",
        padding: {
          xs: "20px 0",
          sm: "30px",
          md: "30px 50px",
        },
        display: "flex",

        flexDirection: "column",
      }}
    >
      {loading ? (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Loading width={50} height={50} color="rgb(98, 0, 238)" />
        </Box>
      ) : (
        <>
          <Typography
            fontSize={24}
            fontWeight={600}
            textAlign="center"
            padding={4}
          >
            {" "}
            <span>{applications?.length}</span> Job Applications found
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              margin: "0 auto",
              boxShadow: "0px 0px 4px rgba(0,0,0,.15)",
            }}
          >
            <Box
              sx={{
                width: {
                  xs: "370px",
                  sm: "650px",
                  md: "850px",
                },

                padding: {
                  xs: "4px",
                  sm: "4px 20px",
                  md: "6px 25px",
                },
                display: "flex",
              }}
            >
              <StyledBox>Details</StyledBox>
              <StyledBox>E-mail</StyledBox>
              <StyledBox>Resume</StyledBox>
              <Divider />
            </Box>
            {applications?.map((application, key) => {
              return (
                <UsersRequestCard
                  key={key}
                  name={application.name}
                  email={application.email}
                  resume={application.resume}
                  id={application.id}
                />
              );
            })}
          </Box>
        </>
      )}
    </Box>
  );
};

export default JobApplications;
