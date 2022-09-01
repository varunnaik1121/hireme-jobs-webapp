import { Box, Typography } from "@mui/material";
import React from "react";
import CompanyCard from "../company/comps/CompanyCard";
import google from "../../assests/HomePage-images/google.avif";
import intel from "../../assests/HomePage-images/intel.webp";
import infoysis from "../../assests/HomePage-images/infoysis.jpg";
import cognizant from "../../assests/HomePage-images/cognizant.webp";
const PopularCompanies = () => {
  return (
    <Box sx={{ bgcolor: "#f6f7f9", paddingBottom: "40px" }}>
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
        Featured Companies
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          paddingBottom: "50px",
          padding: "0 10px",
          justifyContent: {
            xs: "center",
            sm: "center",
            md: "center",
          },
        }}
      >
        <CompanyCard
          websiteLink={"https://google.com"}
          industry={"software industry"}
          location={"california,USA"}
          name={"Google"}
          image={google}
          isDummyCard
        />
        <CompanyCard
          websiteLink={""}
          industry={"hardware industry"}
          location={"california,USA"}
          name={"intel"}
          image={intel}
          isDummyCard
        />
        <CompanyCard
          websiteLink={"https://google.com"}
          industry={"software industry"}
          location={"Bengaluru, Karnataka"}
          name={"infoysis"}
          image={infoysis}
          isDummyCard
        />
        <CompanyCard
          websiteLink={"https://google.com"}
          industry={"software industry"}
          location={"new jesrsey, USA"}
          name={"cognizant"}
          image={cognizant}
          isDummyCard
        />
      </Box>
    </Box>
  );
};

export default PopularCompanies;
