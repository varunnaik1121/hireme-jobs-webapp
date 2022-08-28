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
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../services/firebase";
import { useGlobalUser } from "../../../context/userContext";
import { onSnapshot, where, query } from "firebase/firestore";
import Error from "../../Error";
import FormModal from "./FormModal";
const SingleJobPage = () => {
  const { currentUser } = useGlobalUser();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [companyDetails, setCompanyDetails] = useState(null);
  const [myFavourites, setMyFavourites] = useState(null);
  const { id } = useParams();
  console.log(id);
  console.log(data);

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
      const collectionRef = collection(db, "companies");
      const q = query(collectionRef, where("companyId", "==", data?.companyId));
      const unsub = onSnapshot(q, (snapshot) => {
        setCompanyDetails(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
        setLoading(false);
      });
      return () => unsub();
    }
  }, [data]);

  useEffect(() => {
    console.log({ companyDetails });
  }, [companyDetails]);

  useEffect(() => {
    const docRef = doc(db, `users/${currentUser?.uid}`);

    const unsub = onSnapshot(docRef, (snapshot) => {
      setMyFavourites(snapshot.data().favourites);
    });
    return () => unsub();
  }, []);

  if (data === undefined) {
    return <Error />;
  }

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",

        padding: "35px 0",
      }}
    >
      <Container maxWidth="md">
        <ImageBox
          companyCoverPhoto={
            companyDetails && companyDetails[0]?.companyCoverPhoto
          }
          companyProfile={companyDetails && companyDetails[0]?.companyProfile}
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
            location={data?.location}
            myFavourites={myFavourites}
            companyId={companyDetails && companyDetails[0]?.companyId}
            id={id}
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
        <FormModal id={id} companyId={data?.companyId} />
      </Container>
    </Box>
  );
};

export default SingleJobPage;
