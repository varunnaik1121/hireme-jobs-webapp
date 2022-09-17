import {
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import { db } from "../../../services/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { useState } from "react";
import Loading from "../../Loading/Loading";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import useStyles from "../../../MaterialTheme/styles";

const RejectedPage = ({ myCompanyDetails, companyLoading }) => {
  const classes = useStyles();
  console.log(myCompanyDetails);

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
    }
  };

  if (companyLoading) {
    return (
      <div styles={{ width: "100vw", minHeight: "90vh" }}>
        <Loading width={40} height={40} color={"#4045db"} />
      </div>
    );
  }

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "90vh",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Box sx={{ padding: "20px " }}>
        <NotInterestedIcon sx={{ fontSize: "80px", color: "error.main" }} />
        <Typography
          sx={{ fontWeight: 600, padding: "20px 0", fontSize: "30px" }}
        >
          Your request was rejected
        </Typography>
        <Button
          variant="outlined"
          onClick={() =>
            deleteRequest(
              myCompanyDetails && myCompanyDetails[0].id,
              "requests"
            )
          }
          disabled={loading}
          size="medium"
        >
          {loading ? "loading..." : "continue"}
        </Button>
      </Box>
    </div>
  );
};

export default RejectedPage;
