import { Box } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import ImageBox from "./SingleJobPageComps/ImageBox";
import PostHeader from "./SingleJobPageComps/PostHeader";
const SingleJobPage = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        border: "1px solid red",
        padding: "35px 0",
      }}
    >
      <Container maxWidth="md">
        <ImageBox />
        <PostHeader />
      </Container>
    </Box>
  );
};

export default SingleJobPage;
