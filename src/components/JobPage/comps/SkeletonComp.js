import { Skeleton } from "@mui/material";
import React from "react";

const SkeletonComp = ({ variant, width, height }) => {
  return (
    <Skeleton
      variant={variant}
      width={width}
      height={height}
      //   animation="wave"
      sx={{ marginRight: "5px" }}
    />
  );
};

export default SkeletonComp;
