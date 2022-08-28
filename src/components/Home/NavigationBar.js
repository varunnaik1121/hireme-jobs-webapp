import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import BottomNavigation from "@mui/material/BottomNavigation";
import Box from "@mui/material/Box";
import ApartmentIcon from "@mui/icons-material/Apartment";
import InfoIcon from "@mui/icons-material/Info";

function NavigationBar({ widthbar }) {
  const [value, setValue] = React.useState(0);
  const arr = [
    { name: "Home", icon: <HomeIcon /> },
    { name: "Jobs", icon: <WorkHistoryIcon /> },
    { name: "Companies", icon: <ApartmentIcon /> },
    { name: "About Us", icon: <InfoIcon /> },
  ];
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
                icon={item.icon}
              />
            );
          })}
        </BottomNavigation>
      </Box>
    </>
  );
}

export default NavigationBar;
