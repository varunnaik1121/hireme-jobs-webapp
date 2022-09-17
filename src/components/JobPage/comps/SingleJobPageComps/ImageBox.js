import { Box } from "@mui/material";
import React from "react";
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
              companyCoverPhoto ||
              "https://images.unsplash.com/photo-1549032305-07743102559d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1185&q=80"
            }
            alt="not available"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "inherit",
            }}
          />
          <Box
            sx={{
              width: "60px",
              height: "60px",

              borderRadius: "6px",

              position: "absolute",
              left: "3%",
              bottom: "-14%",
            }}
          >
            <img
              src={companyProfile}
              alt="logo"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderRadius: "inherit",
                outline: "3px solid #f6f7f9",
              }}
            ></img>
          </Box>
        </>
      )}
    </Box>
  );
};

export default ImageBox;
