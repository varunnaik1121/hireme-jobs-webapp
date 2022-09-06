import { Box, cardActionsClasses, Skeleton } from "@mui/material";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import React from "react";
import { useEffect, useState } from "react";
import { useGlobalUser } from "../../../context/userContext";
import { db } from "../../../services/firebase";
import CardComp from "../../JobPage/comps/Card";
import Loading from "../../Loading/Loading";

const CompanyJobs = ({ companyId }) => {
  const [users, setUsers] = useState(null);
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

  useEffect(() => {
    const collectionRef = collection(db, "users");
    getDocs(collectionRef).then((data) => {
      console.log("this is favourites array");
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  useEffect(() => {
    if (users) {
      const promises = [];
      users.forEach((userId) => {
        const docRef = doc(db, `users/${userId}`);
      });
    }
  }, [users]);
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
