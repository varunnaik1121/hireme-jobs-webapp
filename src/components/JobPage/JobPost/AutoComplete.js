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

const AutoComplete = ({ setLocation, setJobTitle }) => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <InputLabel
            sx={{
              fontWeight: "600",
              marginBottom: "10px",
              textTransform: "lowercase",

              color: "text.primary",
              fontSize: 14,
            }}
          >
            Job Title
          </InputLabel>
          <Autocomplete
            onChange={(e, jobvalue) => setJobTitle(jobvalue)}
            id="combo-box-demo"
            options={top100Films}
            getOptionLabel={(option) => option}
            renderInput={(params) => {
              const { InputLabelProps, InputProps, ...rest } = params;
              return (
                <InputBase
                  placeholder="JobTitle"
                  sx={{
                    padding: "5px 12px",
                    borderRadius: "5px",
                    backgroundColor: "transperent",
                    border: "1px solid #ccc",
                  }}
                  {...params.InputProps}
                  {...rest}
                />
              );
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ marginBottom: "20px" }}>
          <InputLabel
            sx={{
              fontWeight: "600",
              marginBottom: "10px",
              textTransform: "lowercase",
              color: "text.primary",
              fontSize: 14,
            }}
          >
            Job Location
          </InputLabel>
          <Autocomplete
            onChange={(e, jobvalue) => setLocation(jobvalue)}
            id="combo-box-demo"
            options={countris}
            getOptionLabel={(option) => option}
            renderInput={(params) => {
              const { InputLabelProps, InputProps, ...rest } = params;
              return (
                <InputBase
                  className="input"
                  placeholder="Job Location"
                  sx={{
                    boxSizing: "border-box",
                    borderRadius: "5px",
                    backgroundColor: "transperent",
                    border: "1px solid #ccc",
                    padding: "5px 12px",
                  }}
                  {...params.InputProps}
                  {...rest}
                />
              );
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default AutoComplete;
