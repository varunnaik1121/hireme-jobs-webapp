import { Box, cardActionsClasses, Skeleton } from "@mui/material";
import { collection, getDocs, query, where } from "firebase/firestore";
import React from "react";
import { useEffect, useState } from "react";
import { db } from "../../../services/firebase";
import CardComp from "../../JobPage/comps/Card";
import Loading from "../../Loading/Loading";

const CompanyJobs = ({ companyId }) => {
  console.log(companyId);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const collectionRef = collection(db, "jobs");
    const q = query(collectionRef, where("companyId", "==", companyId));
    getDocs(q)
      .then((data) => {
        setJobs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log({ loading });

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
          return <CardComp loading={loading} key={index} data={job} />;
        })
      )}
    </Box>
  );
};

export default CompanyJobs;
