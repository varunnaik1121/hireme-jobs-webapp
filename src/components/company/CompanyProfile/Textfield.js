import React from "react";
import Grid from "@mui/material/Grid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessIcon from "@mui/icons-material/Business";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import BarChartIcon from "@mui/icons-material/BarChart";
import LinkIcon from "@mui/icons-material/Link";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";

const Textfield = ({
  type,
  industry,
  headquatar,
  website,
  benefits,
  specialities,
  about,
  onChange,
  change,
}) => {
  const colorvalue = "#4540db";
  return (
    <div style={{ marginLeft: "12px" }}>
      <Grid sx={{ justifyContent: "center" }} container spacing={5}>
        <Grid item xs={12} sm={6}>
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
                Industry
              </Typography>
              <LocationOnIcon
                fontSize="small"
                sx={{ color: colorvalue, marginBottom: "10px" }}
              />
            </Box>
            <input
              style={{ fontSize: "14px", width: "100%", fontWeight: 500 }}
              id="industry"
              onChange={onChange}
              className={!change ? "new" : "newone"}
              disabled={!change}
              type="text"
              value={industry}
            />
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
                padding={"5px 0 15px 0"}
                sx={{ color: "text.primary" }}
              >
                Headquatars
              </Typography>
              <BusinessIcon
                fontSize="small"
                sx={{ marginBottom: "10px", color: colorvalue }}
              />
            </Box>
            <input
              style={{ fontSize: "14px", width: "100%", fontWeight: 500 }}
              id="headquatar"
              onChange={onChange}
              className={!change ? "new" : "newone"}
              disabled={!change}
              type="text"
              value={headquatar}
            />
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
                padding={"5px 0 15px 0"}
                sx={{ color: "text.primary" }}
              >
                WebsiteLink
              </Typography>
              <LinkIcon
                fontSize="small"
                sx={{ marginBottom: "10px", color: colorvalue }}
              />
            </Box>
            <input
              style={{ fontSize: "14px", width: "100%", fontWeight: 500 }}
              id="website"
              onChange={onChange}
              className={!change ? "new" : "newone"}
              disabled={!change}
              type="text"
              value={website}
            />
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
                padding={"5px 0 15px 0"}
                sx={{ color: "text.primary" }}
              >
                Benifits
              </Typography>
              <FamilyRestroomIcon
                fontSize="small"
                sx={{ marginBottom: "10px", color: colorvalue }}
              />
            </Box>
            <input
              style={{ fontSize: "14px", width: "100%", fontWeight: 500 }}
              id="benefits"
              onChange={onChange}
              className={!change ? "new" : "newone"}
              disabled={!change}
              type="text"
              value={benefits}
            />
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
                about
              </Typography>
              <LocalPostOfficeIcon
                fontSize="small"
                sx={{ marginBottom: "10px", color: colorvalue }}
              />
            </Box>
            <textarea
              cols="30"
              rows="3"
              style={{
                resize: "none",
                fontSize: "14px",
                width: "100%",
                fontWeight: "500",
                lineHeight: "25px",
              }}
              onChange={onChange}
              className={!change ? "new" : "newone"}
              id="about"
              type="text"
              value={about}
              disabled={!change}
            />
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
                padding={"5px 0 15px 0"}
                sx={{ color: "text.primary" }}
              >
                WorkType
              </Typography>
              <WorkOutlineIcon
                fontSize="small"
                sx={{ marginBottom: "10px", color: colorvalue }}
              />
            </Box>
            <input
              style={{ fontSize: "14px", width: "100%", fontWeight: 500 }}
              id="type"
              onChange={onChange}
              className={!change ? "new" : "newone"}
              disabled={!change}
              type="text"
              value={type}
            />
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
                padding={"5px 0 15px 0"}
                sx={{ color: "text.primary" }}
              >
                Specialities
              </Typography>
              <BarChartIcon
                fontSize="small"
                sx={{ marginBottom: "10px", color: colorvalue }}
              />
            </Box>
            <input
              style={{ fontSize: "14px", width: "100%", fontWeight: 500 }}
              id="specialities"
              onChange={onChange}
              className={!change ? "new" : "newone"}
              disabled={!change}
              type="text"
              value={specialities}
            />
          </>
        </Grid>
      </Grid>
    </div>
  );
};

export default Textfield;
