import { Box, Button, Container, Typography } from "@mui/material";
import { doc, getDoc } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useGlobalUser } from "../../context/userContext";
import { db } from "../../services/firebase";
import CardComp from "../../components/JobPage/comps/Card";
import Loading from "../Loading/Loading";
const Favourites = () => {
  const { currentUser } = useGlobalUser();
  const [favouriteJobs, setFavouriteJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const docRef = doc(db, `users/${currentUser.uid}`);
    getDoc(docRef)
      .then((idSnap) => {
        const promises = [];
        const ids = idSnap.data().favourites;
        console.log(ids);
        ids.forEach((id) => {
          const docRef1 = doc(db, `jobs/${id}`);
          const promise = getDoc(docRef1);
          promises.push(promise);
        });

        return Promise.all(promises);
      })
      .then((snapshot) => {
        const results = [];
        snapshot.forEach((jobSnap) => {
          results.push({ ...jobSnap.data(), id: jobSnap.id });
        });
        setFavouriteJobs(results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log({ favouriteJobs });
  if (loading) {
    return (
      <Box
        sx={{
          width: "100vw",
          minHeight: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loading width={40} height={40} color="#4045db">
          loading...
        </Loading>
      </Box>
    );
  }

  if (!loading && favouriteJobs.length == 0) {
    return (
      <Box sx={{ minHeight: "100vh" }}>
        <Typography
          fontWeight={600}
          padding={"20px 0"}
          fontSize={24}
          sx={{ color: "text.primary" }}
        >
          No favourites found
        </Typography>
        <Button LinkComponent={"a"} variant="outlined" href="/jobs">
          Add some
        </Button>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        background: "#f6f7f9",
        padding: "20px 0",
      }}
    >
      {favouriteJobs.length > 0 && (
        <Container maxWidth="md">
          <Typography
            fontWeight={600}
            padding={"20px 0"}
            sx={{ color: "text.primary" }}
          >{`${favouriteJobs.length} jobs in your favourite list`}</Typography>
          <Box
            sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
          >
            {favouriteJobs &&
              favouriteJobs?.map((job, index) => {
                return <CardComp loading={loading} key={index} data={job} />;
              })}
          </Box>
        </Container>
      )}
    </Box>
  );
};

export default Favourites;
