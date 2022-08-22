import { Box, Skeleton } from "@mui/material";
import React from "react";
import { Button } from "@mui/material";
const ButtonContainer = ({ loading }) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30px",
      }}
    >
      {loading ? (
        <Skeleton varaint="rounded" width={140} height={30} />
      ) : (
        <Button
          variant="contained"
          size="medium"
          sx={{
            textTransform: "capitalize",
            width: {
              xs: "150px",
              sm: "150px",
            },
            fontWeight: "600",
            fontSize: 12,
            padding: "10px 4px",
          }}
        >
          Apply Now
        </Button>
      )}
      {loading ? (
        <Skeleton
          varaint="rounded"
          width={140}
          height={30}
          sx={{ marginLeft: "20px" }}
        />
      ) : (
        <Button
          variant="outlined"
          size="medium"
          sx={{
            textTransform: "capitalize",
            width: {
              xs: "150px",
              sm: "150px",
              md: "160px",
            },
            fontWeight: "600",
            fontSize: 12,
            marginLeft: {
              xs: "20px",
              sm: "30px",
              md: "35px",
            },
            padding: "10px 4px",
          }}
        >
          Add to favourites
        </Button>
      )}
    </Box>
  );
};

export default ButtonContainer;
