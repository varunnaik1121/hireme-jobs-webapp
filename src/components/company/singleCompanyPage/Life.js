import * as React from "react";

import Box from "@mui/material/Box";

export default function Life({ images }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        justifyContent: "center",
      }}
    >
      {images &&
        images.map((item, index) => {
          return (
            <img
              style={{ margin: "20px", height: "250px", width: "350px" }}
              src={item}
              alt="life"
              key={index}
            />
          );
        })}
    </Box>
  );
}
