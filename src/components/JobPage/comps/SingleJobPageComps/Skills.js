import React from "react";
import { Box, Skeleton, Typography } from "@mui/material";

import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
const Skills = ({ skills, loading }) => {
  return (
    <Box sx={{ padding: "10px 10px" }}>
      {loading ? (
        <>
          <Skeleton variant="text" width={"260px"} height={20}></Skeleton>
          <Skeleton variant="text" width={"260px"} height={20}></Skeleton>
          <Skeleton variant="text" width={"260px"} height={20}></Skeleton>
        </>
      ) : (
        <>
          <Typography
            variant="h6"
            fontSize={16}
            fontWeight={700}
            component="h6"
            padding={"5px 0 15px 0"}
            sx={{ color: "text.primary", textAlign: "left" }}
          >
            Job requirements
          </Typography>
          {skills &&
            skills?.map((skill, index) => {
              return (
                <Box
                  sx={{
                    width: "100%",
                 
                    display: "flex",
                    alignItems: "center",
                  }}
                  key={index + 1212}
                >
                  <CircleOutlinedIcon fontSize="small" color="primary" />

                  <Typography
                    variant="subtitle2"
                    component={"p"}
                    sx={{
                      fontSize: "13px",
                      lineHeight: "25px",
                      marginLeft: "15px",
                    }}
                  >
                    {skill}
                  </Typography>
                </Box>
              );
            })}
        </>
      )}
    </Box>
  );
};

export default Skills;
