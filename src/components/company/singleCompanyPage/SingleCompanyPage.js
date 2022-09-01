import { Box, Tabs } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import "./App.css";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import ImageBox from "./ImageBox";
import PostHeader from "./PostHeader";
import Details from "./Details";

const SingleCompanyPage = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        padding: "35px 0",
      }}
    >
      <Container maxWidth="md">
        <ImageBox />
        <PostHeader />
        <Details />
      </Container>
    </Box>
  );
};

export default SingleCompanyPage;
