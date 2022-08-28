import React from "react";
import { Box } from "@mui/system";
import { Skeleton, Typography } from "@mui/material";
const OverviewPage = ({ label, description, loading }) => {
  return (
    <Box sx={{ width: "100%", padding: "10px 10px" }}>
      {loading ? (
        <>
          <Typography
            variant="h6"
            fontSize={16}
            fontWeight={700}
            component="h6"
            padding={"5px 0 15px 0"}
            sx={{ color: "text.primary" }}
          >
            <Skeleton variant="text" width={200} height={20} />
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            sx={{ fontSize: "13px", lineHeight: "25px" }}
          >
            <Skeleton variant="rectangular" width={"80%"} height={65} />
          </Typography>
        </>
      ) : (
        <>
          <Typography
            variant="h6"
            fontSize={16}
            fontWeight={700}
            component="h6"
            padding={"5px 0 15px 0"}
            sx={{ color: "text.primary" }}
            textAlign={"left"}
          >
            {label}
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            sx={{ fontSize: "13px", lineHeight: "25px", textAlign: "left" }}
          >
            {description}
          </Typography>
        </>
      )}
    </Box>
  );
};

export default OverviewPage;
