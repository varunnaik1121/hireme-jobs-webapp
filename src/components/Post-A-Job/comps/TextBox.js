import { TextField } from "@mui/material";
import React from "react";

const TextBox = ({ name, label, value, onChange, placeholder }) => {
  return (
    <TextField
      variant="outlined"
      value={value}
      name={name}
      label={label}
      onChange={onChange}
      size={"medium"}
      sx={{
        margin: "15px",
        minWidth: "300px",
        marginTop: {
          xs: "10px",
        },
      }}
      required
      color="primary"
      placeholder={placeholder}
    ></TextField>
  );
};

export default TextBox;
