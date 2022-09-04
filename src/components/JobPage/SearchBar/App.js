import React from "react";
import "./App.css";
import { Box } from "@mui/material";
function App() {
  return (
    <Box sx={{ width: "100%", margin: "38px auto" }}>
      <Box
        sx={{
          position: "relative",
          width: "60%",
          height: "50px",
          border: "1px solid red",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Box
          component={"input"}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        ></Box>
      </Box>
    </Box>
  );
}

export default App;
