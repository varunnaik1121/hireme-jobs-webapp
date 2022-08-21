import { Box } from "@mui/material";
import React from "react";

const ImageBox = () => {
  return (
    <Box
      sx={{
        width: "100%",
        // border: "1px solid red",
        height: "220px",
        borderRadius: "10px 10px 0 0",
        position: "relative",
        border: "1px solid red",
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1656519966579-da21868b7ed7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1193&q=80"
        alt="company image"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "inherit",
        }}
      />
      <Box
        sx={{
          width: "55px",
          height: "55px",

          borderRadius: "6px",
          border: "3px solid #f6f7f9",
          position: "absolute",
          left: "3%",
          bottom: "-14%",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1659359148424-78c78a583d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=348&q=80"
          alt="logo"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            borderRadius: "inherit",
          }}
        ></img>
      </Box>
    </Box>
  );
};

export default ImageBox;
