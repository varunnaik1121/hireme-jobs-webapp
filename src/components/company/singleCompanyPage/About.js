import React from "react";
import Grid from "@mui/material/Grid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessIcon from "@mui/icons-material/Business";
import { TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import BarChartIcon from "@mui/icons-material/BarChart";
import LinkIcon from "@mui/icons-material/Link";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";

const About = ({
  industry,
  benefits,
  about,
  specialities,
  website,
  images,
  workType,
}) => {
  const colorvalue = "#4045db";
  const textcolor = "#495057";
  return (
    <div style={{ width: "100%", marginLeft: "12px", marginTop: "25px" }}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Typography
                variant="h6"
                fontSize={16}
                fontWeight={700}
                component="h6"
                padding={"5px 0 5px 0"}
              >
                Industry
              </Typography>
              <BusinessIcon fontSize="small" sx={{ color: colorvalue }} />
            </Box>
            <Typography
              variant="p"
              fontSize={14}
              fontWeight={500}
              component="h6"
              padding={"6px 15px 6px 0px"}
              sx={{ color: textcolor, textAlign: "left" }}
            >
              {industry}
            </Typography>
          </>
        </Grid>
        <Grid item xs={12} sm={6}>
          <>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Typography
                variant="h6"
                fontSize={16}
                fontWeight={700}
                component="h6"
                padding={"5px 0 5px 0"}
              >
                Headquatars
              </Typography>
              <LocationOnIcon fontSize="small" sx={{ color: colorvalue }} />
            </Box>
            <Typography
              variant="p"
              fontSize={14}
              fontWeight={500}
              component="h6"
              padding={"6px 15px 6px 0px"}
              sx={{ color: textcolor, textAlign: "left" }}
            >
              {}
            </Typography>
          </>
        </Grid>
        <Grid item xs={12} sm={6}>
          <>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Typography
                variant="h6"
                fontSize={16}
                fontWeight={700}
                component="h6"
                padding={"5px 0 5px 0"}
              >
                WebsiteLink
              </Typography>
              <LinkIcon fontSize="small" sx={{ color: colorvalue }} />
            </Box>
            <Box sx={{ textAlign: "left" }}>
              <Typography
                variant="p"
                fontSize={14}
                fontWeight={500}
                component="a"
                padding={"6px 15px 6px 0px"}
                sx={{
                  color: "primary.main",
                  textAlign: "left ",
                  // border: "1px solid red",

                  width: "100%",
                }}
                href={website}
                target="_blank"
              >
                {website}
              </Typography>
            </Box>
          </>
        </Grid>
        <Grid item xs={12} sm={6}>
          <>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Typography
                variant="h6"
                fontSize={16}
                fontWeight={700}
                component="h6"
                padding={"5px 0 5px 0"}
              >
                Benifits
              </Typography>
              <FamilyRestroomIcon fontSize="small" sx={{ color: colorvalue }} />
            </Box>
            <Typography
              variant="p"
              fontSize={14}
              fontWeight={500}
              component="h6"
              padding={"6px 15px 6px 0px"}
              sx={{ color: textcolor, textAlign: "left" }}
            >
              {benefits}
            </Typography>
          </>
        </Grid>
        <Grid item xs={12}>
          <>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Typography
                variant="h6"
                fontSize={16}
                fontWeight={700}
                component="h6"
                padding={"5px 0 15px 0"}
                sx={{ color: "text.primary" }}
              >
                Overview
              </Typography>
              <LocalPostOfficeIcon
                fontSize="small"
                sx={{ marginBottom: "10px", color: colorvalue }}
              />
            </Box>
            <Typography
              variant="p"
              fontSize={14}
              fontWeight={500}
              component="h6"
              padding={"6px 15px 6px 0px"}
              sx={{ color: textcolor, textAlign: "left", lineHeight: "25px" }}
            >
              {about}
            </Typography>
          </>
        </Grid>
        <Grid item xs={12} sm={6}>
          <>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Typography
                variant="h6"
                fontSize={16}
                fontWeight={700}
                component="h6"
                padding={"5px 0 5px 0"}
              >
                WorkType
              </Typography>
              <WorkOutlineIcon fontSize="small" sx={{ color: colorvalue }} />
            </Box>
            <Typography
              variant="p"
              fontSize={14}
              fontWeight={500}
              component="h6"
              padding={"6px 15px 6px 0px"}
              sx={{ color: textcolor, textAlign: "left" }}
            >
              {workType}
            </Typography>
          </>
        </Grid>
        <Grid item xs={12} sm={6}>
          <>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Typography
                variant="h6"
                fontSize={16}
                fontWeight={700}
                component="h6"
                padding={"5px 0 5px 0"}
              >
                Specalities
              </Typography>
              <BarChartIcon fontSize="small" sx={{ color: colorvalue }} />
            </Box>
            <Typography
              variant="p"
              fontSize={14}
              fontWeight={500}
              component="h6"
              padding={"6px 15px 6px 0px"}
              sx={{ color: textcolor, textAlign: "left" }}
            >
              {specialities}
            </Typography>
          </>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
