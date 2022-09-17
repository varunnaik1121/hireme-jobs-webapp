import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AutoComplete from "./AutoComplete";
import "./Style.css";
import SelectOption from "./SelectOption";
import OverView from "./OverView";
import MultiType from "./MultiType";
import Button from "@mui/material/Button";
import { Typography, Card } from "@mui/material";
import { db } from "../../../services/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
const JobApplication = ({ myCompanyDetails }) => {
  const navigate = useNavigate();
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = React.useState("");
  const [workType, setWorkType] = React.useState("");
  const [empType, setEmpType] = React.useState("");
  const [expeiance, setExpeiance] = React.useState("");
  const [overView, setOverView] = React.useState("");
  const [keywords, setKeyWords] = React.useState([]);
  const [reqirements, setReqirements] = React.useState([]);
  const [loading, setLoading] = useState(false);
  const [jobPosted, setJobPosted] = useState(false);
  const setDefaultValues = () => {
    setJobTitle("");
    setLocation("");
    setExpeiance("");
    setOverView("");
    setKeyWords("");
    setReqirements("");
    setSalary("");
    setEmpType("");
    setWorkType("");
  };

  if (jobPosted) {
    return (
      <Box sx={{ padding: "30px 0", marginTop: "30px" }}>
        <Typography>Job posted successfully</Typography>
        <Button onClick={() => navigate("/")}>continue</Button>
      </Box>
    );
  }
  const addJobToFirebase = async () => {
    if (jobTitle && location && workType && overView && keywords) {
      setLoading(true);
      try {
        toast.loading("posting job...");
        const collectionRef = collection(db, "jobs");
        const payload = {
          title: jobTitle,
          about: myCompanyDetails.about,
          salary,
          location,
          timestamp: serverTimestamp(),
          requirements: reqirements,
          workLevel: expeiance,
          workType: empType,
          companyId: myCompanyDetails.companyId,
          companyName: myCompanyDetails.name,
          keywords,
          overview: overView,
          experience: workType,
          companyProfile: myCompanyDetails.companyProfile,
          coverPhoto: "",
        };
        const data = await addDoc(collectionRef, payload);
        console.log(data);
        setLoading(false);
        toast.success("job posted successfully");
        setDefaultValues();
        setJobPosted(true);
      } catch (err) {
        toast.error("something went wrong");
      }
    } else {
      toast.dismiss();
      toast.error("please fill all the fields");
    }
  };

  return (
    <Box sx={{ width: "100vw", minHeight: "100vh", background: "#f6f7f9" }}>
      <Container maxWidth="md">
        <Typography
          variant="h6"
          fontWeight={600}
          sx={{
            color: "text.primary",
            textAlign: "center",
            padding: "35px 25px",
            fontSize: "24px",
          }}
        >
          <Box
            component={"span"}
            sx={{
              color: "primary.main",
              fontWeight: "500",
              fontSize: "inherit",
            }}
          >
            Post
          </Box>{" "}
          your job
        </Typography>
        <Card
          sx={{
            height: "100%",
            // border: "1px solid red",
            padding: "60px 40px",
            textAlign: "left",
            boxShadow: "2px 2px 8px rgba(0,0,0,.1)",
            background: "#fff",
          }}
        >
          <AutoComplete setJobTitle={setJobTitle} setLocation={setLocation} />
          <SelectOption
            setSalary={setSalary}
            setWorkType={setWorkType}
            setEmpType={setEmpType}
            setExpeiance={setExpeiance}
            salary={salary}
            workType={workType}
            empType={empType}
            expeiance={expeiance}
          />
          <MultiType
            reqirements={reqirements}
            keywords={keywords}
            setKeyWords={setKeyWords}
            setReqirements={setReqirements}
          />
          <OverView setOverView={setOverView} />
          <Button
            onClick={addJobToFirebase}
            type="submit"
            sx={{
              bgcolor: "#4045db",
              margin: "35px 0",
              textTransform: "capitalize",
              minWidth: "180px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            variant="contained"
            disabled={loading}
          >
            {loading ? "posting..." : "post job"}
          </Button>
        </Card>
      </Container>
    </Box>
  );
};

export default JobApplication;
