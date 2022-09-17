import { Box, Container, IconButton, Typography } from "@mui/material";
import React from "react";

import instagram from "../../assests/footerImages/instagram.png";
import gmail from "../../assests/footerImages/gmail.png";
import CopyrightIcon from "@mui/icons-material/Copyright";
const Footer = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        padding: "30px 0",
      

        marginBottom: {
          xs: "40px",
          sm: "30px",
          md: "0",
        },
        width: "100%",
       
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            padding: {
              xs: "0 10px",
              sm: "0",
              md: "0",
            },
          }}
        >
          <Typography
            color={"primary"}
            sx={{ margin: "10px 0", fontWeight: 600 }}
          >
            HireMe.
          </Typography>
          <Typography
            varaint="subtitle2"
            sx={{ fontSize: "12px", fontWeight: 500, color: "text.secondary" }}
          >
            hireme123@gmail.com
          </Typography>
        </Box>
        <Box>
          <Typography
            fontWeight={600}
            sx={{ color: "text.primary", margin: "10px 0" }}
          >
            Contact Us
          </Typography>
          <Box>
            <IconButton>
              <img
                src={instagram}
                alt="instagram"
                style={{ width: "30px", height: "30px" }}
              />
            </IconButton>
            <IconButton>
              <img
                src={gmail}
                alt="Gmail"
                style={{ width: "30px", height: "30px" }}
              />
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            padding: {
              xs: "0 10px",
              sm: "0",
              md: "0",
            },
            display: {
              xs: "none",
              md: "block",
              sm: "block",
            },
          }}
        >
          <Typography
            fontWeight={600}
            sx={{ color: "text.primary", margin: "10px 0" }}
          >
            Developers
          </Typography>
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                component={"a"}
                sx={{
                  fontWeight: 600,
                  fontSize: 12,
                  textDecoration: "none",
                  marginBottom: "5px",
                  color: "text.secondary",
                }}
                href="https://instagram.com/varunnaik62"
              >
                Varun Naik
              </Typography>
              <Typography
                component={"a"}
                sx={{
                  fontWeight: 600,
                  fontSize: 12,
                  textDecoration: "none",
                  marginBottom: "5px",
                  color: "text.secondary",
                }}
                href="https://instagram.com/varunnaik1121"
              >
                loading...
              </Typography>
              <Typography
                component={"a"}
                sx={{
                  fontWeight: 600,
                  fontSize: 12,
                  textDecoration: "none",
                  marginBottom: "5px",
                  color: "text.secondary",
                }}
                href="https://instagram.com/varunnaik1121"
              >
                loading...
              </Typography>
              <Typography
                component={"a"}
                sx={{
                  fontWeight: 600,
                  fontSize: 12,
                  textDecoration: "none",
                  marginBottom: "5px",
                  color: "text.secondary",
                }}
                href="https://instagram.com/varunnaik1121"
              >
                loading...
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", textAlign: "center", justifyContent: "center" }}
      >
        <CopyrightIcon sx={{ color: "text.secondary", fontSize: "12px" }} />
        <Typography fontSize={12} sx={{ color: "text.secondary" }}>
          2022.inc All rights Reserved
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;
