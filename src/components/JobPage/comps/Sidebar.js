import {

  Box,

  Typography,
  FormGroup,

  FormControl,

  IconButton,
  Button,
  Paper,
} from "@mui/material";
import React from "react";

import CheckBox from "./CheckBox";
import ClearIcon from "@mui/icons-material/Clear";

import { useState } from "react";
import { useEffect } from "react";

const Sidebar = ({ handleFilterClose, totalJobs, setTotalJobs, data }) => {
  // const [filtered, setFiltered] = useState([]);

  const [skills, setSkills] = useState([]);

  const handleFilter = () => {
    handleFilterClose();
  };

  const filterJobsOnCheck = (jobs) => {
    var filteredJobs = [];
    jobs.forEach((job) => {
      const singleJobKeyWords = [
        job.title.toString().toLowerCase(),
        job.salary.toString().toLowerCase(),
        job.workType.toString().toLowerCase(),
        job.workLevel.toString().toLowerCase(),
      ];
      console.log(singleJobKeyWords);
      skills.forEach((value) => {
        if (singleJobKeyWords.includes(value.toString().trim().toLowerCase())) {
          console.log({ job });
          filteredJobs.push(job);
        } else {
          return;
        }
      });
    });
    setTotalJobs([...new Set(filteredJobs)]);
  };

  useEffect(() => {
    if (skills.length) {
      filterJobsOnCheck(data);
    } else {
      setTotalJobs([...data]);
    }
  }, [skills]);

  console.log({ skills });

  return (
    <Paper
      sx={{
        padding: {
          xs: "10px 30px",
          sm: "10px 25px",
          md: "20px 20px",
        },
        width: {
          xs: "100vw",
          md: "100%",
        },
        height: {
          xs: "100%",
          md: "100%",
        },
        display: {
          xs: "flex",
          md: "block",
        },
        justifyContent: {
          xs: "flex-start",
          sm: "center",
        },
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: {
            xs: "flex",
            sm: "flex",
            md: "none",
            width: "100%",
            // border: "1px solid red",

            justifyContent: "flex-end",
            alignItems: "flex-start",
          },
        }}
      >
        <IconButton size="large" onClick={handleFilterClose}>
          <ClearIcon />
        </IconButton>
      </Box>

      <FormControl
        sx={{
          fontWeight: "500",
          display: "flex",
          width: {
            xs: "100%",
          },
        }}
      >
        <Typography
          variant="h6"
          fontSize={18}
          fontWeight={700}
          color="primary"
          textAlign="center"
          letterSpacing={1}
          padding={"10px 0"}
        >
          Filter Jobs
        </Typography>
        <FormGroup sx={{ margin: "10px 0" }}>
          <Typography
            variant="h6"
            textAlign={"left"}
            fontSize={14}
            textTransform="capitalize"
            fontWeight={700}
          >
            type of employment
          </Typography>
          <CheckBox
            value={"full time"}
            label={"Full Time Jobs"}
            setSkills={setSkills}
            skills={skills}
          />
          <CheckBox
            value={"part time "}
            label={"Part Time Jobs"}
            setSkills={setSkills}
            skills={skills}
          />
          <CheckBox
            value={"remote jobs"}
            label={"Remote Jobs"}
            setSkills={setSkills}
            skills={skills}
          />
          <CheckBox
            value={"internship jobs"}
            label={"Internship Jobs"}
            setSkills={setSkills}
            skills={skills}
          />
        </FormGroup>
        <FormGroup sx={{ margin: "10px 0" }}>
          <Typography
            variant="h6"
            textAlign={"left"}
            fontSize={14}
            textTransform="capitalize"
            fontWeight={700}
          >
            Experience Level
          </Typography>
          <CheckBox
            value={"student level"}
            label={"student level"}
            setSkills={setSkills}
            skills={skills}
          />
          <CheckBox
            value={"entry level"}
            label={"entry level"}
            setSkills={setSkills}
            skills={skills}
          />
          <CheckBox
            value={"mid level"}
            label={"Mid level"}
            setSkills={setSkills}
            skills={skills}
          />
          <CheckBox
            value={"senior level"}
            label={"senior level"}
            setSkills={setSkills}
            skills={skills}
          />
        </FormGroup>
        <FormGroup sx={{ margin: "15px 0" }}>
          <Typography
            variant="h6"
            textAlign={"left"}
            fontSize={14}
            textTransform="capitalize"
            fontWeight={700}
          >
            Salary Range
          </Typography>
          <CheckBox
            value={"15k-30k"}
            label={"15K-30K"}
            setSkills={setSkills}
            skills={skills}
          />
          <CheckBox
            value={"30k-50k"}
            label={"30K-50K"}
            setSkills={setSkills}
            skills={skills}
          />
          <CheckBox
            value={"50k-1l"}
            label={"50K-1L"}
            setSkills={setSkills}
            skills={skills}
          />
        </FormGroup>
      </FormControl>
      <Button
        variant="contained"
        size="medium"
        m="10px 0"
        sx={{
          minWidth: "100%",
          textTransform: "capitalize",
          marginTop: {
            xs: "10px",
          },
        }}
        onClick={handleFilter}
      >
        Apply
      </Button>
    </Paper>
  );
};

export default Sidebar;
