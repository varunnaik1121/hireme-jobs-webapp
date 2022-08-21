import {
  CardMedia,
  Container,
 
  Typography,
  Card,
  Divider,
 
} from "@mui/material";
import React from "react";
import pendingGif from "../../../assests/pending/waiting.gif";

const PendingPage = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        padding: "15px ",
        width: "100%",
        minHeight: "100vh",

        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Card
        sx={{
          padding: "25px 30px",
          maxWidth: "400px",

          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "column",
        }}
        elevation={3}
      >
        <Typography
          variant="h4"
          sx={{
            textTransform: "capitalize",
            textAlign: "center",
            fontWeight: "500",
          }}
        >
          Thank you for your {""}
          <Typography
            component={"span"}
            color="primary"
            sx={{ fontSize: "inherit", fontWeight: "inherit" }}
          >
            Request
            <Divider />
          </Typography>
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            paddingTop: "20px",
            textTransform: "capitalize",
            color: "#1B1D2D",
          }}
        >
          your request is under verification.you can start posting jobs once you
          get{" "}
          <Typography
            component={"span"}
            color="primary"
            sx={{
              fontSize: "inherit",
              fontWeight: "500",
              textTransform: "capitalize",
            }}
          >
            verified.
          </Typography>
        </Typography>

        <CardMedia
          component="img"
          src={pendingGif}
          height={"100%"}
          alt="gif "
        ></CardMedia>
      </Card>
    </Container>
  );
};

export default PendingPage;
