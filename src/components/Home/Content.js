import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

import copy from "../../assests/HomePageImages/copy.png";

import { Grid } from "@mui/material";
import FeaturedJobs from "./FeaturedJobs";
import { motion } from "framer-motion";
import PopularCompanies from "./PopularCompanies";
export default function Content({ isCompany }) {
  return (
    <React.Fragment>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          py: {
            xs: 2,
            md: 0,
          },

          flexDirection: "column",
          border: "1px solid red",
        }}
      >
        <Grid
          container
          direction="row"
          alignItems="center"
          sx={{ minHeight: "90vh" }}
        >
          <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                flex: 1,
                mx: 4,
              }}
            >
              <Typography
                sx={{
                  color: "text.primary",
                  fontWeight: "600",
                  paddingRight: "20px",
                  lineHeight: { xs: "50px", sm: "55px", md: "75px" },
                  fontSize: {
                    xs: "36px",
                    sm: "45px",
                    md: "55px",
                  },
                  //   border: "1px solid red",
                }}
                variant="h3"
                component="h3"
              >
                <div>
                  Find Your Dream Job With{" "}
                  <span style={{ color: "#4045db", fontWeight: 600 }}>
                    <Box
                      component={"span"}
                      style={{ color: "text.primary", fontWeight: 600 }}
                    >
                      Hire
                    </Box>
                    Me
                  </span>
                </div>
              </Typography>

              <Typography
                sx={{
                  maxWidth: "80%",
                  color: "text.secondary",
                  //   border: "1px solid red",
                  margin: "10px auto",
                  color: "text.secondary",
                  fontWeight: 500,
                }}
                variant="p"
                fontSize={12}
              >
                Get The Most Existing Job From All Around The World And Grow
                Your Career Fast With Others
              </Typography>
            </Box>
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={6}
            justifyContent="center"
            order={{ xs: 2, sm: 2 }}
          >
            <Box
              sx={{
                height: {
                  xs: "400px",
                  sm: "450px",
                  md: "550px",
                },
                width: "80%",
                backgroundSize: "cover",
                objectFit: "contain",
                marginTop: {
                  xs: 0,
                  md: 0,
                },
              }}
              component="img"
              src={copy}
            />
          </Grid>
        </Grid>
        <FeaturedJobs isCompany={isCompany} />
      </Container>
    </React.Fragment>
  );
}
