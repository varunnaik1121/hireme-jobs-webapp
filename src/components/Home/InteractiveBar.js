import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const InteractiveBar = ({ isCompany }) => {
  return (
    <Box
      sx={{
        width: {
          md: "75%",
          sm: "90%",
        },
        // border: "1px solid red",
        minHeight: "100px",

        bgcolor: "primary.main",
        color: "#f6f7f9",
        padding: "15px 30px",

        display: "flex",
        justifyContent: {
          md: "flex-start",
          sm: "flex-start",
          xs: "center",
        },
        alignItems: "center",
        borderRadius: "2px",
        boxShadow: "2px 2px 6px rgba(0,0,0,.1)",
        flexWrap: "wrap",
        marginBottom: "30px",
      }}
    >
      <Box
        sx={{
          width: {
            sm: "60%",
            md: "60%",
          },
          textAlign: "left",
          margin: "0 10px",
        }}
      >
        <Typography fontWeight={700} padding={"0 0 10px 0"}>
          {isCompany ? "Need skilled employees?" : "Hurry up!"}
        </Typography>
        <Typography variant="subtitle2" fontSize={10}>
          {isCompany
            ? "Post your jobs to our website"
            : " Register Your company Now and start posting jobs"}
        </Typography>
      </Box>
      <Box>
        {isCompany ? (
          <Button
            variant="contained"
            sx={{
              bgcolor: "#f6f7f9",
              color: "primary.main",
              fontWeight: "600",
              fontSize: "12px",
              "&:hover": {
                bgcolor: "#f6f7f9",
                color: "text.primary",
              },
              borderRadius: "2px",
              boxShadow: "none",
              marginTop: {
                xs: "15px",
                sm: 0,
                md: 0,
              },
              minWidth: "120px",
            }}
            component={Link}
            to="/postJob"
          >
            post job
          </Button>
        ) : (
          <Button
            variant="contained"
            sx={{
              bgcolor: "#f6f7f9",
              color: "primary.main",
              fontWeight: "600",
              fontSize: "12px",
              "&:hover": {
                bgcolor: "#f6f7f9",
                color: "text.primary",
              },
              borderRadius: "2px",
              boxShadow: "none",
              marginTop: {
                xs: "15px",
                sm: 0,
                md: 0,
              },
              minWidth: "120px",
            }}
            component={Link}
            to="/postJob"
          >
            Register Now
          </Button>

        )}
      </Box>
    </Box>
  );
};

export default InteractiveBar;
