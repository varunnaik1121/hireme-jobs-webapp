import * as React from "react";

import Grid from "@mui/material/Grid";

import InputLabel from "@mui/material/InputLabel";

import { Typography } from "@mui/material";
import { InputBase } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const MultiType = ({ setReqirements, setKeyWords, reqirements, keywords }) => {
  const inputfocus = React.useRef(null);
  const inputfocuskeyword = React.useRef(null);

  const [single, setSingle] = React.useState("");
  const [keyword, setKeyWord] = React.useState("");

  console.log(keywords);

  const handleReqirements = (e) => {
    e.preventDefault();
    const req = single.trim();

    if (req && !reqirements.includes(req)) {
      setReqirements((p) => {
        return [...p, req];
      });
    }
    setSingle("");
    inputfocus.current.focus();
  };

  const handleKeyWords = (e) => {
    e.preventDefault();
    const key = keyword.trim();

    if (key && !keywords.includes(key)) {
      setKeyWords((p) => {
        return [...p, key];
      });
    }
    setKeyWord("");
    inputfocuskeyword.current.focus();
  };

  const jobRequirementDelete = (key) => {
    console.log(key);
    setReqirements((p) => {
      return p.filter((n, i) => {
        console.log(n.id);
        return i !== key;
      });
    });
  };

  const skillDelete = (key) => {
    console.log(key);
    setKeyWords((p) => {
      return p.filter((n, i) => {
        console.log(n.id);
        return i !== key;
      });
    });
  };

  console.log(reqirements);
  return (
    <div>
      <Grid item xs={12} sx={{ marginBottom: "10px" }}>
        <InputLabel
          sx={{
            marginBottom: "10px",
            fontWeight: "600",
            textTransform: "lowercase",

            color: "text.primary",
            fontSize: 14,
          }}
        >
          Job Reqirements
        </InputLabel>
        <Typography
          component="p"
          sx={{
            fontWeight: 500,
            fontSize: "12px",
            margin: "0 0 5px 0",
            color: "text.secondary",
          }}
        >
          Add atleast 1-6 required skills for the job.
        </Typography>
        <form onSubmit={handleReqirements}>
          <InputBase
            ref={inputfocus}
            onChange={(e) => setSingle(e.target.value)}
            value={single}
            endAdornment={
              <AddCircleOutlineIcon
                sx={{ color: "#4045db" }}
                onClick={handleReqirements}
              ></AddCircleOutlineIcon>
            }
            placeholder="skills"
            sx={{
              padding: "5px 12px",
              borderRadius: "5px",
              backgroundColor: "transperent",
              border: "1px solid #ccc",
            }}
            fullWidth
          />
        </form>
        <Grid sx={{ my: 1 }} item xs={12}>
          <Stack
            sx={{
              overflowX: "scroll",
              "&::-webkit-scrollbar": { display: "none" },
            }}
            direction="row"
            spacing={1}
          >
            {reqirements &&
              reqirements.map((item, i) => {
                return (
                  <Chip
                    sx={{
                      marginBottom: "10px",
                    }}
                    key={i}
                    id={i}
                    label={item}
                    variant="outlined"
                    onDelete={(e) => jobRequirementDelete(i)}
                  />
                );
              })}
          </Stack>
        </Grid>
      </Grid>

      <Grid sx={{ my: 1 }} item xs={12}>
        <InputLabel
          sx={{
            marginBottom: "10px",
            fontWeight: "600",
            textTransform: "lowercase",

            color: "text.primary",
            fontSize: 14,
          }}
        >
          categories
        </InputLabel>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "12px",
            margin: "0 0 5px 0",
            color: "text.secondary",
          }}
        >
          please select atleast 1-4 categories.it helps to show your job in the
          selected categories.
        </Typography>
        <form onSubmit={handleKeyWords}>
          <InputBase
            ref={inputfocuskeyword}
            onChange={(e) => setKeyWord(e.target.value)}
            value={keyword}
            endAdornment={
              <AddCircleOutlineIcon
                sx={{ color: "#4045db" }}
                onClick={handleKeyWords}
              ></AddCircleOutlineIcon>
            }
            placeholder="eg: technical,web,etc.."
            sx={{
              padding: "5px 12px",
              borderRadius: "5px",
              backgroundColor: "transperent",
              border: "1px solid #ccc",
            }}
            fullWidth
          />
        </form>
        <Grid sx={{ my: 1 }} item xs={12}>
          <Stack
            sx={{
              overflowX: "scroll",
              "&::-webkit-scrollbar": { display: "none" },
            }}
            direction="row"
            spacing={1}
          >
            {keywords &&
              keywords.map((item, i) => {
                return (
                  <Chip
                    sx={{ marginBottom: "10px" }}
                    key={i}
                    id={i}
                    label={item}
                    variant="outlined"
                    onDelete={(e) => skillDelete(i)}
                  />
                );
              })}
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default MultiType;
