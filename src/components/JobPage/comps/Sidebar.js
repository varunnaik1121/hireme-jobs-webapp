import {
  Drawer,
  Box,
  Checkbox,
  Typography,
  FormGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  styled,
  IconButton,
  Button,
  Paper,
} from "@mui/material";
import React from "react";

import CheckBox from "./CheckBox";
import ClearIcon from "@mui/icons-material/Clear";

import { useState } from "react";

const Sidebar = ({ handleFilterClose }) => {
  const [skills, setSkills] = useState([]);
  const handleFilter = () => {
    console.log("data filtered based on your choice");
  };

  console.log({ skills });
  return (
    <Paper
      sx={{
        padding: {
          xs: "10px 30px",
          md: "20px",
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
          fontSize={16}
          fontWeight={600}
          color="primary"
          textAlign="center"
          letterSpacing={1}
        >
          Filter Jobs
        </Typography>
        <FormGroup sx={{ margin: "10px 0" }}>
          <Typography
            variant="h6"
            fontSize={16}
            textTransform="capitalize"
            m="5px 0"
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
            value={"part time"}
            label={"Part Time Jobs"}
            setSkills={setSkills}
            skills={skills}
          />
          <CheckBox
            value={"remote"}
            label={"Remote Jobs"}
            setSkills={setSkills}
            skills={skills}
          />
          <CheckBox
            value={"internship"}
            label={"Internship Jobs"}
            setSkills={setSkills}
            skills={skills}
          />
        </FormGroup>
        <FormGroup sx={{ margin: "10px 0" }}>
          <Typography
            variant="h6"
            fontSize={14}
            textTransform="capitalize"
            m="5px 0"
          >
            Seniority Level
          </Typography>
          <CheckBox
            value={"student"}
            label={"student level Jobs"}
            setSkills={setSkills}
            skills={skills}
          />
          <CheckBox
            value={"entry"}
            label={"entry level Jobs"}
            setSkills={setSkills}
            skills={skills}
          />
          <CheckBox
            value={"mid"}
            label={"Mid level Jobs"}
            setSkills={setSkills}
            skills={skills}
          />
          <CheckBox
            value={"senior"}
            label={"senior level Jobs"}
            setSkills={setSkills}
            skills={skills}
          />
        </FormGroup>
        <FormGroup sx={{ margin: "10px 0" }}>
          <Typography
            variant="h6"
            fontSize={14}
            textTransform="capitalize"
            m="5px 0"
          >
            Salary Range
          </Typography>
          <CheckBox
            value={"30000"}
            label={"15K-30K"}
            setSkills={setSkills}
            skills={skills}
          />
          <CheckBox
            value={"50000"}
            label={"30K-50K"}
            setSkills={setSkills}
            skills={skills}
          />
          <CheckBox
            value={"100000"}
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
