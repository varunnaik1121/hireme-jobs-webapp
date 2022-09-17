import * as React from "react";

import Grid from "@mui/material/Grid";

import InputLabel from "@mui/material/InputLabel";

import { InputBase } from "@mui/material";

import "./Style.css";

const OverView = ({ setOverView }) => {
  return (
    <div>
      <Grid item xs={12}>
        <InputLabel
          sx={{
            marginBottom: "10px",
            fontWeight: "600",
            textTransform: "lowercase",

            color: "text.primary",
            fontSize: 14,
          }}
        >
          OverView
        </InputLabel>
        <InputBase
          onChange={(e) => setOverView(e.target.value)}
          placeholder="expalin in depth about the job"
          sx={{
            padding: "5px 12px",
            borderRadius: "5px",
            backgroundColor: "transperent",
            border: "1px solid #ccc",
            fontSize: 14,
          }}
          fullWidth
          multiline
          rows={5}
        />
      </Grid>
    </div>
  );
};

export default OverView;
