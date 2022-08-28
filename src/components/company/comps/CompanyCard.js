import React from "react";
import { Avatar, Card, Typography, Button, Box, Link } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
const CompanyCard = ({ websiteLink, companyId, location, industry, name }) => {
  return (
    <Card
      sx={{
        padding: "15px 20px",

        width: "360px",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        flexDirection: "column",
        margin: "12px",
        height: "170px",
        justifyContent: "center",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar
          src="https://images.unsplash.com/photo-1661435805424-8eac4e3cc924?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
          alt="logo"
          sx={{ width: 60, height: 60 }}
        ></Avatar>
        <Box sx={{ padding: "0 0 0 20px" }}>
          <Typography
            variant="h6"
            fontWeight={600}
            fontSize={16}
            padding={"10px 0"}
          >
            <Link
              href={`/company/${companyId}`}
              underline="none"
              color={"text.primary"}
            >
              {name}
            </Link>
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                width: "120px",
                display: "flex",
                alignItems: "center",
                padding: "0 5px 0 0",
              }}
            >
              <p
                style={{
                  fontSize: 10,
                  letterSpacing: 0,
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                }}
              >
                {location}
              </p>
              <LocationOnOutlinedIcon
                fontSize="small"
                sx={{ color: "text.secondary", marginLeft: "5px" }}
              />
            </div>
            <div
              style={{
                width: "120px",
                display: "flex",
                alignItems: "center",
                padding: "0 0px 0 5px",
              }}
            >
              <p
                style={{
                  fontSize: 10,
                  letterSpacing: 0,
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                }}
              >
                {industry}
              </p>
              <WorkOutlineOutlinedIcon
                fontSize="small"
                sx={{ color: "text.secondary", marginLeft: "5px" }}
              />
            </div>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",

              margin: "10px 0 0 0",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "15px",
            }}
          >
            <Button
              variant="contained"
              size="small"
              sx={{
                fontSize: 12,
                textTransform: "capitalize",
                padding: "4px 15px",
                borderRadius: 0,
                fontWeight: 600,
              }}
            >
              <Link
                href={websiteLink}
                target="_blank"
                rel="noreferrer"
                sx={{
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: 400,
                  fontSize: "12px",
                }}
              >
                Visit Website
              </Link>
            </Button>
            <Button
              size="small"
              variant="outlined"
              sx={{
                fontSize: 12,
                textTransform: "capitalize",
                padding: "4px 15px",
                borderRadius: 0,
                fontWeight: 600,
              }}
            >
              <Link
                href={`/company/${companyId}`}
                underline="none"
                color={"primary"}
                sx={{ fontWeight: 400, fontSize: "12px" }}
              >
                view profile
              </Link>
            </Button>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default CompanyCard;
