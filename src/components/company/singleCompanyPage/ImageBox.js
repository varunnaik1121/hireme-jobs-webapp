import { Box } from "@mui/material";
import React, { useState } from "react";
import { Skeleton } from "@mui/material";
const ImageBox = ({ companyProfile, companyCoverPhoto, loading }) => {
    
  return (
    <Box
      sx={{
        width: "100%",
        // border: "1px solid red",
        height: "220px",
        borderRadius: "10px 10px 0 0",
        position: "relative",
        // border: "1px solid red",
      }}
    >
      {loading ? (
        <>
          <Skeleton variant="rounded" width="100%" height="100%" />
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
            <Skeleton variant="rounded" width="100%" height="100%" />
          </Box>
        </>
      ) : (
        <>
          <img
            src={

              "https://images.unsplash.com/photo-1435575653489-b0873ec954e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            }
            alt="company image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "inherit",
            }}
          ></img>
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
              src={
                "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcGFueXxlbnwwfHwwfHw%3D&w=1000&q=80"
              }
              alt="logo"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderRadius: "inherit",
              }}
            ></img>
          </Box>
        </>
      )}
    </Box>
  );
};

export default ImageBox;