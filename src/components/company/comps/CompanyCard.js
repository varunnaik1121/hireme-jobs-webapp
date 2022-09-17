import React from "react";
import { Avatar, Card, Typography, Button, Box, Link } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
const CompanyCard = ({
  websiteLink,
  companyId,
  location,
  industry,
  name,
  isDummyCard,
  image,
}) => {
  return (
    <Card
      elevation={0}
      sx={{
        padding: "15px 20px",
        boxShadow: "2px 2px 6px rgba(0,0,0,.1)",
        width: {
          xs: "350px",
          md: "360px",
          sm: "360px",
        },
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        flexDirection: "column",
        margin: "12px",
        height: "170px",
        justifyContent: "center",
        transition: "all .2s",

        // border: "1px solid red",
        "&:hover": {
          transform: "scale(.99)",
          boxShadow: "2px 2px 10px rgba(0,0,0,.2)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          // border: "1px solid green",
          width: "320px",
        }}
      >
        <Avatar src={image} alt="logo" sx={{ width: 60, height: 60 }}></Avatar>
        <Box
          sx={{
            padding: "0 0 0 20px",
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <Typography
              variant="h6"
              fontWeight={600}
              fontSize={14}
              padding={"0 0 10px 0"}
              component={Link}
              href={!isDummyCard ? `/company/${companyId}` : `/companies`}
              sx={{
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              {name}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              justifyContent: "space-between",
              // border: "1px solid green",
            }}
          >
            <div
              style={{
                // width: "120px",
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
                  textTransform: "capitalize",
                  fontWeight: 500,
                  maxWidth: "90px",
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
                // width: "120px",
                display: "flex",
                alignItems: "center",
                padding: "0 0 0 5px",
              }}
            >
              <p
                style={{
                  fontSize: 10,
                  letterSpacing: 0,
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textTransform: "capitalize",
                  fontWeight: 500,
                  maxWidth: "90px",
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

              // margin: "10px 0 0 0",
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
                href={!isDummyCard ? websiteLink : `/companies`}
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
                margin: "0 0 0 15px",
              }}
            >
              <Link
                href={!isDummyCard ? `/company/${companyId}` : `/companies`}
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
