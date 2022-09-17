import { Skeleton } from "@mui/material";
import React from "react";

const SkeletonComp = ({ variant, width, height }) => {
  return (
    <Skeleton
      variant={variant}
      width={width}
      height={height}
      
      sx={{ marginRight: "5px" }}
    />
  );
};

export default SkeletonComp;
