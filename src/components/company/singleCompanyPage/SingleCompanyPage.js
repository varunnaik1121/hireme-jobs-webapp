import { Box } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import "./App.css";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import ImageBox from "./ImageBox";
import PostHeader from "./PostHeader";
import Details from "./Details";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../services/firebase";

const SingleCompanyPage = () => {
  const { id } = useParams();
  console.log(id);
  const [loading, setLoading] = useState(false);
  const [companyDetails, setCompanyDetails] = useState([]);
  useEffect(() => {
    setLoading(true);
    const docRef = doc(db, "companies", id);
    getDoc(docRef)
      .then((data) => {
        setCompanyDetails(data.data());
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        padding: "35px 0",
        background: "#f6f7f9",
      }}
    >
      <Container maxWidth="md">
        <ImageBox
          loading={loading}
          companyCoverPhoto={companyDetails?.coverPhoto}
          companyProfile={companyDetails?.companyProfile}
        />

        <Box
          sx={{
            border: "1px solid rgba(0,0,0,.1)",
            padding: "0 20px 40px 20px",
          }}
        >
          <PostHeader
            title={companyDetails?.name}
            location={companyDetails?.headquatar}
            loading={loading}
          />
          <Details
            industry={companyDetails?.industry}
            benefits={companyDetails?.benefits}
            about={companyDetails?.about}
            specialities={companyDetails?.specialities}
            website={companyDetails?.website}
            images={companyDetails?.images}
            workType={companyDetails?.type}
            companyId={companyDetails?.companyId}
            title={companyDetails?.name}
            loading={loading}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default SingleCompanyPage;
