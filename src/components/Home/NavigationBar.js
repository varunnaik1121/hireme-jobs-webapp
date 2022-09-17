import React from "react";
import HomeIcon from "@mui/icons-material/Home";

import WorkHistoryIcon from "@mui/icons-material/WorkHistory";

import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import BottomNavigation from "@mui/material/BottomNavigation";
import Box from "@mui/material/Box";
import ApartmentIcon from "@mui/icons-material/Apartment";

import { useNavigate } from "react-router";

import FavoriteIcon from "@mui/icons-material/Favorite";
function NavigationBar({ widthbar }) {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  const pathname = window.location.pathname;
  const [value, setValue] = React.useState(pathname);

  const arr = [
    { name: "Home", icon: <HomeIcon />, path: "/" },
    { name: "Jobs", icon: <WorkHistoryIcon />, path: "/jobs" },
    { name: "Companies", icon: <ApartmentIcon />, path: "/companies" },
    {
      name: "Favourites",
      icon: <FavoriteIcon />,
      path: "/favourites",
    },
  ];

  console.log(value);
  return (
    <>
      <Box
        sx={{
          width: "100%",

          display: {
            xs: "block",
            sm: "block",
            md: "none",
          },
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: "1000",
          background: "#fff",
        }}
      >
        <BottomNavigation
          sx={{ backgroundColor: "transparent" }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          {arr.map((item, i) => {
            return (
              <BottomNavigationAction
                sx={{
                  fontSize: "22px",
                  px: { xs: "20px", sm: "20px", md: "20px" },
                  // border: "1px solid red",
                }}
                key={i}
                label={item.name}
                value={item.path}
                icon={item.icon}
                onClick={() => handleClick(item.path)}
              />
            );
          })}
        </BottomNavigation>
      </Box>
    </>
  );
}

export default NavigationBar;
