import React from "react";
import { FormControlLabel, Checkbox, Typography } from "@mui/material";
const CheckBox = ({ label, value, skills, setSkills }) => {
  const handleChange = (e) => {
    const index = skills.indexOf(e.target.value);
    if (index === -1) {
      setSkills([...skills, e.target.value.toString().toLowerCase()]);
    } else {
      setSkills(skills.filter((skill) => skill !== e.target.value));
    }
  };
  return (
    <FormControlLabel
      label={
        <Typography
          variant="h6"
          fontSize={13}
          fontWeight={500}
          sx={{ color: "text.secondary", textTransform: "capitalize" }}
        >
          {label}
        </Typography>
      }
      control={
        <Checkbox
          value={value}
          size="small"
          checked={skills?.includes(value.toString().toLowerCase())}
          onChange={handleChange}
          sx={{ textTransform: "capitalize" }}
        />
      }
    />
  );
};

export default CheckBox;
