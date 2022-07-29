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
  StepButton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import TextBox from "./comps/TextBox";
import { useState } from "react";
import GetCurentStep from "./comps/GetCurentStep";
import { useEffect } from "react";
import { db, storage } from "../../services/firebase";
import { collection } from "firebase/firestore";
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

const PostJobPage = () => {
  const classes = useStyles();
  const [myCompanyRequest, setMyCompanyRequest] = useState([]);
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

  const requestRef=

  useEffect(() => {}, []);

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

  return (
    <>
      <Box className={classes.container}>
        <Typography variant="h5"> basic company details</Typography>
        <Divider></Divider>
      </Box>
      <Container
        maxWidth="sm"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
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
