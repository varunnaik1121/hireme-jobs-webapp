import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { useForm } from "react-hook-form";
import { Typography } from "@mui/material";
import { InputBase, FormControl, FormHelperText } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import top100Films from "./data";
import countris from "./countries";
import Button from "@mui/material/Button";
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
