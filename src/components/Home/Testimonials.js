import { Box, Typography } from "@mui/material";
import React from "react";
import TestimonialCard from "./TestimonialCard";
import user1 from "../../assests/HomePage-images/user1.jpg";
import user2 from "../../assests/HomePage-images/user2.jpg";
import user3 from "../../assests/HomePage-images/user3.jpg";
const Testimonials = () => {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        maxWidth: "100vw",
      }}
    >
      <Typography
        variant="h6"
        fontWeight={600}
        sx={{
          color: "text.primary",
          textAlign: "center",
          padding: "35px 25px",
          fontSize: "24px",
        }}
      >
        <Box
          component={"span"}
          sx={{
            color: "primary.main",
            fontWeight: "500",
            fontSize: "inherit",
          }}
        >
          Let's see
        </Box>{" "}
        what our users say's
      </Typography>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          // border: "1px solid red",
          justifyContent: "center",
          flexWrap: "wrap",
          paddingBottom: "50px",
        }}
      >
        <TestimonialCard
          image={user1}
          name={"Alex"}
          description={
            "Thanks to hireme for this wonderful website which allows us to apply for the desired jobs. "
          }
          jobTitle={"UI/UX Designer"}
        />
        <TestimonialCard
          image={user2}
          name={"Ashika"}
          jobTitle={"Web developer"}
          description={
            "I got my dream job after using hireme. All thanks to hireme for this incredible job opportunity."
          }
        />
        <TestimonialCard
          image={user3}
          name={"Manish"}
          jobTitle={"Project Manager"}
          description={
            "Thanks to hireme for this wonderful website which allows us to apply for the desired jobs. "
          }
        />
      </Box>
    </Box>
  );
};

export default Testimonials;
