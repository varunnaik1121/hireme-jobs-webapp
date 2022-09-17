import { Box, Container } from "@mui/system";
import React from "react";
import { Typography } from "@mui/material";
import CompanyCard from "./comps/CompanyCard";
import { useDbFetch } from "../../context/userContext";
import Loading from "../Loading/Loading";

const CompaniesPage = () => {
  const { data: companies, loading } = useDbFetch("companies");

  console.log(companies);
  if (loading) {
    return (
      <Box
        sx={{
          width: "100vw",
          minHeight: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#f6f7f9",
        }}
      >
        <Loading width={40} height={40} color={"rgb(98, 0, 238)"} />
      </Box>
    );
  }
  return (
    <Box sx={{ width: "100vw", minHeight: "100vh", background: "#f6f7f9" }}>
      <Container
        maxWidth="md"
        sx={{
          padding: {
            xs: 0,
            sm: "20px 10px",
            md: "20px 10px",
          },
          background: "inherit",
        }}
      >
        <Box>
          <Typography
            variant="h6"
            sx={{
              color: "text.primary",
              fontWeight: 600,
              padding: "20px ",
              textAlign: "center",
              borderBottom: "1px solid rgba(0,0,0,.1)",
            }}
          >
            Top Companies{" "}
          </Typography>
        </Box>
        <Typography
          variant="h6"
          fontWeight={600}
          color="text.secondary"
          textAlign={"center"}
          fontSize={16}
          padding="15px 0"
        >
          {companies?.length} companies found
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: {
              xs: "center",
              sm: "center",
              md: "flex-start",
            },
          }}
        >
          {companies?.map((company, index) => {
            return (
              <CompanyCard
                key={index}
                websiteLink={company.website}
                name={company.name}
                companyId={company.id}
                location={company.headquatar}
                industry={company.industry}
                image={company.companyProfile}
              />
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default CompaniesPage;
