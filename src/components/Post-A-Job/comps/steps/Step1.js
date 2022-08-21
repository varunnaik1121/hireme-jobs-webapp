import {Box, TextareaAutosize, Button } from "@mui/material";
import React from "react";
import TextBox from "../TextBox";

const Step1 = ({ formDetails, onChange, handleNext }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "30px 0",
        flexDirection: "column",
        padding: "10px 10px",
        maxWidth: "380px",
      }}
    >
      <TextBox
        name={"name"}
        label={"company name"}
        value={formDetails.name}
        onChange={onChange}
      />
      <TextBox
        name={"headquatar"}
        label={"headquatar"}
        value={formDetails.headquatar}
        onChange={onChange}
        placeholder={"eg: Karnataka,india"}
      />
      <TextareaAutosize
        aria-label="empty textarea"
        placeholder="description about company"
        style={{
          width: "300px",
          height: 100,
          margin: "15px",
          textAlign: "center",
          padding: "10px 0",
        }}
        onChange={onChange}
        name="about"
        value={formDetails.about}
      />
      <Box sx={{ padding: "20px" }}>
        <Button disabled>Back</Button>
        <Button onClick={handleNext}>Next</Button>
      </Box>
    </Box>
  );
};

export default Step1;
