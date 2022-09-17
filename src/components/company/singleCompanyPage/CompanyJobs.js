import { Box, Typography } from "@mui/material";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import React from "react";
import { useEffect, useState } from "react";
import { useGlobalUser } from "../../../context/userContext";
import { db } from "../../../services/firebase";
import CardComp from "../../JobPage/comps/Card";
import Loading from "../../Loading/Loading";

const CompanyJobs = ({ companyId }) => {
  // const [users, setUsers] = useState(null);
  const { currentUser } = useGlobalUser();
  console.log({ uid: currentUser.uid });
  const [isOwner, setIsOwner] = useState(false);

  console.log({ companyId });
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const collectionRef = collection(db, "jobs");
    const q = query(collectionRef, where("companyId", "==", companyId));
    const unsub = onSnapshot(q, (snapshot) => {
      setJobs(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
    });
    return () => unsub();
  }, []);
  console.log({ loading });
  useEffect(() => {
    if (companyId === currentUser.uid) {
      setIsOwner(true);
    } else {
      setIsOwner(false);
    }
  }, [companyId, currentUser]);

  //code for removing favourites from all the users collection
  if (!loading && jobs?.length === 0) {
    return (
      <Typography sx={{ fontWeight: 600, padding: "20px 0" }}>
        no jobs found
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        width: "100%",

        padding: "20px 10px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: {
          xs: "center",
          sm: "center",
          md: "flex-start",
        },
        alignItems: "center",
      }}
    >
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Loading width={40} height={40} color={"#4045db"} />
        </Box>
      ) : (
        jobs?.map((job, index) => {
          return (
            <CardComp
              loading={loading}
              key={index}
              data={job}
              isOwner={isOwner}
            />
          );
        })
      )}
    </Box>
  );
};

export default CompanyJobs;
