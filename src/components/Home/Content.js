import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

import copy from "../../assests/HomePageImages/copy.png";

import { Grid } from "@mui/material";
import FeaturedJobs from "./FeaturedJobs";
import { motion } from "framer-motion";
export default function Content() {
  const textVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,

      transition: { duration: 0.5 },
    },
  };
  return (
    <React.Fragment>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          py: 6,
          flexDirection: "column",
        }}
      >
        <Grid container direction="row" alignItems="center">
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
                  color: "primary",
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
                <motion.div
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                >
                  Find Your Dream Job With{" "}
                  <span style={{ color: "#4045db", fontWeight: 600 }}>
                    <span style={{ color: "black", fontWeight: 600 }}>
                      Hire
                    </span>
                    Me
                  </span>
                </motion.div>
              </Typography>

              <Typography
                sx={{
                  maxWidth: "80%",
                  color: "text.secondary",
                  //   border: "1px solid red",
                  margin: "10px auto",
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
                  xs: "30px",
                  md: 0,
                },
              }}
              component="img"
              src={copy}
            />
          </Grid>
        </Grid>
        <FeaturedJobs />
      </Container>
    </React.Fragment>
  );
}
