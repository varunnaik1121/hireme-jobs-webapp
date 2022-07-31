import React from "react";
import {
  Container,
  Typography,
  Box,
  Stepper,
  StepLabel,
  Paper,
  Divider,
  Step,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useGlobalUser } from "../../context/userContext";
import { useState } from "react";
import GetCurentStep from "./comps/GetCurentStep";
import { useEffect } from "react";
import { db } from "../../services/firebase";
import Button from "@mui/material";
import {
  collection,
  getDoc,
  onSnapshot,
  query,
  where,
  doc,
  getDocs,
} from "firebase/firestore";
import { useContext } from "react";
import { UserContext } from "../../context/useUser";
import Loading from "../Loading/Loading";
const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",

    padding: "40px 10px",
    textTransform: "capitalize",
  },
  subtitle: {
    width: "max-content",
  },
});

//functional coomponent starts

const PostJobPage = ({ currentUser }) => {
  const { loading, setLoading } = useGlobalUser();
  const classes = useStyles();
  const [myCompanyDetails, setMyCompanyDetails] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  const [formDetails, setFormDetails] = useState({
    name: "",
    headquatar: "",
    about: "",
    benefits: "",
    industry: "",
    website: "",
    type: "",
    specialities: "",
    steps: [
      {
        label: "step 1",
      },
      {
        label: "step 2",
      },
      {
        label: "step 3",
      },
    ],
  });

  useEffect(() => {
    setLoading(true);

    const getData = async () => {
      try {
        const q = query(
          collection(db, "requests"),
          where("companyId", "==", currentUser.uid)
        );

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          setMyCompanyDetails({ ...doc.data(), id: doc.id });
        });
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    getData();
  }, []);

  console.log(myCompanyDetails);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  const handlePrevClick = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleNext = () => {
    console.log("clicked next button");
    setActiveStep((prev) => prev + 1);
  };

  const deleteDetails = () => {
    console.log("details deleted");
  };

  if (loading) {
    return (
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Loading height={50} width={50} color={"#100EB0"} />
      </Container>
    );
  }

  if (myCompanyDetails?.status === " fullfilled") {
    return <div>post job page</div>;
  }

  if (myCompanyDetails?.status === "pending") {
    return <div>we will verify you soooner</div>;
  }

  if (myCompanyDetails?.status === "rejected") {
    return (
      <div>
        your request was rejected try to fill the form another time
        <Button onClick={deleteDetails}>continue</Button>
      </div>
    );
  }
  return (
    <>
      <Box className={classes.container}>
        <Typography variant="h5"> basic company details</Typography>
        <Divider></Divider>
      </Box>
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form
          style={{
            marginTop: "20px",
            padding: "10px",
          }}
        >
          <Paper sx={{ padding: "25px 10px 5px 10px" }} elevation={2}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {formDetails.steps.map((item) => (
                <Step key={item.label}>
                  <StepLabel sx={{ minWidth: "100px" }}>{item.label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <GetCurentStep
              value={activeStep}
              onChange={handleChange}
              formDetails={formDetails}
              handleNext={handleNext}
              handlePrevClick={handlePrevClick}
            />
          </Paper>
        </form>
      </Container>
    </>
  );
};

export default PostJobPage;
