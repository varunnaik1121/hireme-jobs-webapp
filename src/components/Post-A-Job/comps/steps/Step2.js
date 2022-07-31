import {
  Paper,
  Box,
  TextareaAutosize,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import React from "react";
import TextBox from "../TextBox";
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  button: {
    margin: "10px",
  },
});
const Step2 = ({ formDetails, onChange, handleNext, handlePrevClick }) => {
  const classes = useStyles();
  const options = [
    { value: "on-site" },
    { value: "off-site" },
    { value: "hybrid" },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "30px 0",
        flexDirection: "column",
        padding: "10px 10px",
      }}
    >
      <TextBox
        name={"benefits"}
        label={"benefits"}
        value={formDetails.benefits}
        onChange={onChange}
      />
      <TextBox
        name={"industry"}
        label={"industry"}
        value={formDetails.industry}
        onChange={onChange}
      />
      <TextField
        select
        name={"type"}
        label="select work type"
        value={formDetails.type}
        sx={{ minWidth: "300px", marginTop: "15px" }}
        onChange={onChange}
        size="medium"
        required
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>
      <Box sx={{ padding: "20px" }}>
        <Button onClick={handlePrevClick}>Back</Button>
        <Button onClick={handleNext}>Next</Button>
      </Box>
    </Box>
  );
};

export default Step2;
