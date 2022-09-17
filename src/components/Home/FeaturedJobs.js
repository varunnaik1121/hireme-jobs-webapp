import React from "react";
import { Box, Typography } from "@mui/material";

import FeaturedCard from "./FeaturedCard";
import { useNavigate } from "react-router";
import InteractiveBar from "./InteractiveBar";
import PopularCompanies from "./PopularCompanies";
import Testimonials from "./Testimonials";
const FeaturedJobs = ({ isCompany }) => {
  const navigate = useNavigate();
  const handleRoute = () => {
    navigate("/jobs");
  };
  return (
    <>
      <Box
        sx={{
          width: "100%",

          padding: "0 15px 20px 15px",
          background: "#f6f7f9",
          marginTop: {
            xs: "10px",
          },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
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
            Explore
          </Box>{" "}
          popular jobs
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            paddingBottom: "50px",
            justifyContent: {
              xs: "center",
              sm: "center",
              md: "flex-start",
              lg: "center",
            },
          }}
        >
          <FeaturedCard
            image={
              "https://images.unsplash.com/photo-1628526498666-add5eddf65df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
            }
            title={"UI/UX Designer"}
            location={"Delhi"}
            time={"Full Time"}
            about={
              "An application developer's typical responsibilities include coding, designing, application management, troubleshooting, monitoring updates and possible security threats, and providing end user support. "
            }
            onClick={handleRoute}
          />
          <FeaturedCard
            image={
              " https://images.unsplash.com/photo-1614294149010-950b698f72c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            }
            title={"Application developer"}
            location={"Goa"}
            time={"Part Time"}
            about={
              "The web developer, also called a web designer or webmaster, is the person who builds, adjusts, and/or maintains it. Web developers may work for small companies, large corporations, or as freelancers, using technical and creative skills to create functional websites."
            }
            onClick={handleRoute}
          />
          <FeaturedCard
            image={
              " https://images.unsplash.com/photo-1642006139624-6313327f92f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=818&q=80"
            }
            title={"Java Developer"}
            location={"Mumbai"}
            time={"Full Time"}
            about={
              "A Java Developer is a programmer who designs, develops, and manages Java-based applications and software. With most large organizations using Java to implement software systems and backend services, a Java developer is one of the most sought-after jobs today."
            }
            onClick={handleRoute}
          />
          <FeaturedCard
            image={
              "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            }
            title={"Data Scientist"}
            location={"Pune"}
            time={"Full Time"}
            about={
              "A Data Scientist is a professional who uses analytical, statistical, and programming skills to collect large data sets. They develop data-driven solutions explicitly tailored toward the needs of an organization."
            }
            onClick={handleRoute}
          />
        </Box>
        <InteractiveBar isCompany={isCompany} />
      </Box>
      <Testimonials />
      <PopularCompanies />
    </>
  );
};

export default FeaturedJobs;
