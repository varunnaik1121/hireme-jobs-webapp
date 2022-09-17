import React from "react";
import { Avatar, Card } from "@mui/material";
import { Typography, Box } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";

const FeaturedCard = ({ image, title, about, location, time, onClick }) => {
  return (
    <Card
      elevation={0}
      sx={{
        width: "250px",
        height: "250px",
      
        padding: "20px 25px",
        boxShadow: "2px 2px 10px rgba(0,0,0,.1)",
        margin: "10px 15px",
        transition: "all .2s",

        "&:hover": {
          transform: "scale(.99)",
          boxShadow: "2px 2px 10px rgba(0,0,0,.2)",
        },
      }}
    >
      <Avatar src={image} variant="rounded"></Avatar>
      <Typography
        variant="h6"
        fontWeight={700}
        fontSize={"17px"}
        textAlign={"left"}
        padding={"14px 0"}
        sx={{
          color: "text.primary",
          "&:hover": {
            textDecoration: "underline",
            cursor: "pointer",
          },
        }}
        onClick={onClick}
      >
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        component={"p"}
        fontWeight={600}
        fontSize={12}
        sx={{
          color: "text.secondary",
         
          textAlign: "left",
          lineHeight: "20px",
          overflow: "scroll",
          textOverflow: "ellipsis",
          maxHeight: "90px",
          "&::-webkit-scrollbar": {
            width: 0,
          },
        }}
      >
        {about}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "8px 0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <LocationOnOutlinedIcon
            fontSize="small"
            sx={{ color: "text.secondary", margin: "0 5px 0 0" }}
          />
          <Typography
            component={"p"}
            fontSize={12}
            fontWeight={600}
            sx={{ color: "text.secondary" }}
          >
            {location}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <WorkOutlineOutlinedIcon
            fontSize="small"
            sx={{ color: "text.secondary", margin: "0 5px 0 0" }}
          />
          <Typography
            component={"p"}
            fontSize={12}
            fontWeight={600}
            sx={{ color: "text.secondary" }}
          >
            {time}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default FeaturedCard;
