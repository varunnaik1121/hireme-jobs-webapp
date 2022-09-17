import * as React from "react";
import { styled } from "@mui/material/styles";

import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import { InputBase } from "@mui/material";

import "./Style.css";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "#fff",
    border: "none",
    fontSize: 16,
  },
}));

const SelectOption = ({
  salary,
  workType,
  empType,
  expeiance,
  setSalary,
  setWorkType,
  setEmpType,
  setExpeiance,
}) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} sx={{ marginBottom: "10px" }}>
        <InputLabel
          sx={{
            fontWeight: "600",
            marginBottom: "10px",
            textTransform: "lowercase",

            color: "text.primary",
            fontSize: 14,
          }}
        >
          job Type
        </InputLabel>
        <Select
          fullWidth
          sx={{
            borderRadius: "5px",
            border: "1px solid #ccc",

            padding: "5px 12px",
          }}
          labelId="demo-customized-select-label"
          value={empType}
          onChange={(e) => setEmpType(e.target.value)}
          input={<BootstrapInput />}
        >
          <MenuItem value={"full time"}>Full Time</MenuItem>
          <MenuItem value={"part time"}>Part Time</MenuItem>
          <MenuItem value={"internship jobs"}>Internship</MenuItem>
          <MenuItem value={"remote jobs"}>Remote</MenuItem>
        </Select>
      </Grid>
      <Grid item xs={12} sm={6} sx={{ marginBottom: "10px" }}>
        <InputLabel
          sx={{
            fontWeight: "600",
            marginBottom: "10px",
            textTransform: "lowercase",

            color: "text.primary",
            fontSize: 14,
          }}
        >
          Work Type
        </InputLabel>
        <Select
          fullWidth
          sx={{
            boxSizing: "border-box",
            borderRadius: "5px",
            border: "1px solid #ccc",

            padding: "5px 12px",
          }}
          label="pef"
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={workType}
          onChange={(e) => setWorkType(e.target.value)}
          input={<BootstrapInput />}
        >
          <MenuItem value={"min 1 year"}>min 1 year</MenuItem>
          <MenuItem value={"min 2 years"}>min 2 years</MenuItem>
          <MenuItem value={"min 3 years"}>min 3 years</MenuItem>
          <MenuItem value={"above 3 years"}>above 3 years</MenuItem>
        </Select>
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
          Experience level
        </InputLabel>
        <Select
          fullWidth
          sx={{
            boxSizing: "border-box",
            borderRadius: "5px",
            border: "1px solid #ccc",
            padding: "5px 12px",
          }}
          label="pef"
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={expeiance}
          onChange={(e) => setExpeiance(e.target.value)}
          input={<BootstrapInput />}
        >
          <MenuItem value={"student level"}>student level</MenuItem>
          <MenuItem value={"entry level"}>entry level</MenuItem>
          <MenuItem value={"mid level"}>mid level</MenuItem>
          <MenuItem value={"senior level"}>senior level</MenuItem>
        </Select>
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
          salary
        </InputLabel>
        <Select
          fullWidth
          sx={{
            boxSizing: "border-box",
            borderRadius: "5px",
            border: "1px solid #ccc",
            padding: "5px 12px",
          }}
          label="pef"
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          input={<BootstrapInput />}
        >
          <MenuItem value={"15k-30k"}>15k-30k</MenuItem>
          <MenuItem value={"30k-50k"}>30k-50k</MenuItem>
          <MenuItem value={"50k-1L"}>50k-1k</MenuItem>
          <MenuItem value={"none"}>none</MenuItem>
        </Select>
      </Grid>
    </Grid>
  );
};

export default SelectOption;
