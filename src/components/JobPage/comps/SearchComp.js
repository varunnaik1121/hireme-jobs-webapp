import { Box } from "@mui/system";
import React from "react";

const SearchComp = () => {
  return (
    <Box
      sx={{
        width: {
          xs: "330px",
          sm: "450px",
          md: "600px",
        },
      }}
    >
      <input
        type={"text"}
        style={{
          width: "100%",
          height: "50px",
          padding: "4px 10px",
          fontSize: "16px",
        }}
      />
    </Box>
  );
};

export default SearchComp;
