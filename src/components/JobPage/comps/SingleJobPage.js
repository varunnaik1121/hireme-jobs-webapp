import { Box } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import ImageBox from "./SingleJobPageComps/ImageBox";
import PostHeader from "./SingleJobPageComps/PostHeader";
import OverviewPage from "./SingleJobPageComps/OverviewPage";
import Skills from "./SingleJobPageComps/Skills";
import ButtonContainer from "./SingleJobPageComps/ButtonContainer";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../services/firebase";
const SingleJobPage = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [companyDetails, setCompanyDetails] = useState(null);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    setLoading(true);
    const docRef = doc(db, "jobs", id);
    getDoc(docRef)
      .then((data) => setData(data.data()))

      .catch((err) => {
        console.log(err);
        setLoading(true);
      });
  }, [id]);

  useEffect(() => {
    if (data != null) {
      const docRef = doc(db, "companies", data?.companyId);
      getDoc(docRef)
        .then((data) => setCompanyDetails(data.data()))
        .then(() => setLoading(false))
        .catch((err) => {
          console.log(err);
          setLoading(true);
        });
    }
  }, [data]);

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        border: "1px solid red",
        padding: "35px 0",
      }}
    >
      <Container maxWidth="md">
        <ImageBox
          companyCoverPhoto={companyDetails?.companyCoverPhoto}
          companyProfile={companyDetails?.companyProfile}
          loading={loading}
        />
        <Box
          sx={{
            width: "100%",
            padding: "10px 20px 40px 20px",
            border: "1px solid rgba(0,0,0,.1)",
          }}
        >
          <PostHeader
            title={data?.title}
            salary={data?.salary}
            workLevel={data?.workLevel}
            workType={data?.workType}
            experience={data?.experience}
            companyName={data?.companyName}
            loading={loading}
          />
          <OverviewPage
            label={"overview"}
            description={data?.overview}
            loading={loading}
          />
          <Skills skills={data?.requirements} loading={loading} />
          <OverviewPage
            label={"About Company"}
            description={data?.about}
            loading={loading}
          />
          <ButtonContainer loading={loading} />
        </Box>
      </Container>
    </Box>
  );
};

export default SingleJobPage;
