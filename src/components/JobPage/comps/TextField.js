import React from "react";
import { TextField } from "@mui/material";
const TextFieldComp = ({ name, value, label, onChange }) => {
  return (
    <TextField
      name={name}
      value={value}
      label={label}
      variant={"outlined"}
      onChange={onChange}
      sx={{
        width: "90%",
        margin: "15px 0",
        fontSize: "12px",
        fontWeight: "bold",
      }}
      size={"medium"}
    ></TextField>
  );
};

export default TextFieldComp;
