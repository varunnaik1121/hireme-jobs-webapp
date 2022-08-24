import {
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../../services/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { useState } from "react";
import Loading from "../../Loading/Loading";

import useStyles from "../../../MaterialTheme/styles";
import rejectedImage from "../../../assests/pending/rejected.jpg";
const RejectedPage = ({ myCompanyDetails }) => {
  const classes = useStyles();

  const [loading, setLoading] = useState(false);
  const deleteRequest = async (id, path) => {
    setLoading(true);
    try {
      const docRef = doc(db, path, id);
      const data = await deleteDoc(docRef);
      console.log(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(true);
      window.location.realod();
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Card
        sx={{
          padding: "20px",
          display: "flex",
          flexDirection: {
            xs: "column",
            xl: "row",
          },
          minHeight: "350px",
        }}
      >
        <Box
          elevation={1}
          sx={{
            padding: "30px 20px",

            flexDirection: "column",
            alignItems: "center",
          }}
          className={classes.flex}
        >
          <CardContent>
            <Typography
              component="div"
              variant="h6"
              sx={{
                borderBottom: "1px solid purple",
                textAlign: "center",
                minWidth: "max-content",
                margin: "10px 0",
              }}
              color="secondary"
            >
              Your request was rejected
            </Typography>
          </CardContent>
          <Button
            variant="outlined"
            onClick={() => deleteRequest(myCompanyDetails?.id, "requests")}
          >
            Continue
          </Button>
        </Box>
        <CardMedia
          component="img"
          src={rejectedImage}
          width={260}
          height={260}
        ></CardMedia>
      </Card>
      {loading && (
        <Box
          className={classes.flex}
          sx={{
            width: "100%",
            height: "100%",

            position: "absolute",
            top: 0,
            left: 0,
            background: "rgba(0,0,0,.2)",
          }}
        >
          <Loading width={40} height={40} color="purple" />
        </Box>
      )}
    </div>
  );
};

export default RejectedPage;
