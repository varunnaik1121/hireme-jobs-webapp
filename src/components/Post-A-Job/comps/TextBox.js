import { TextField } from "@mui/material";
import React from "react";

const TextBox = ({ name, label, value, onChange }) => {
  return (
    <TextField
      variant="outlined"
      value={value}
      name={name}
      label={label}
      onChange={onChange}
      size={"medium"}
      sx={{ margin: "15px", minWidth: "300px" }}
      required
      color="primary"
    ></TextField>
  );
};

export default TextBox;
