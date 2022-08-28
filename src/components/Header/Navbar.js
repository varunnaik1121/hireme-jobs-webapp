import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Tooltip, IconButton, MenuItem, Avatar, Menu } from "@mui/material";

const arr = [
  { name: "Home", icon: <HomeIcon /> },
  { name: "Jobs", icon: <PeopleAltIcon /> },
  { name: "Companies", icon: <WorkHistoryIcon /> },
  { name: "About Us", icon: <NotificationsActiveIcon /> },
];

export default function ButtonAppBar() {
  const settings = ["Profile", "Account", "Setting", "Logout"];

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box>
      <AppBar
        elevation={1}
        position="static"
        sx={{
          py: 2,
          backgroundColor: "#fff",
          color: "#000",
          width: "100vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          boxShadow: "none",
        }}
      >
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontWeight: 600,
            mx: 6,
          }}
        >
          Hire{""}
          <span style={{ color: "#4045db", fontFamily: "Poppins,sans-serif" }}>
            Me
          </span>
        </Typography>

        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "flex",
            },
          }}
        >
          {arr.map((item, i) => {
            return (
              <Typography
                variant="p"
                component="p"
                sx={{
                  fontFamily: "Poppins,sans-serif",
                  mx: 3,
                  "&:hover": {
                    background: "#4045db",
                    color: "#fff",
                    fontWeight: 300,
                  },
                  cursor: "pointer",
                  padding: "4px 14px",
                  transition: "all .4s ease",
                  borderRadius: "2px",
                }}
              >
                {item.name}
              </Typography>
            );
          })}
        </Box>

        <Box sx={{ flexGrow: 0, mx: 2 }}>
          <Tooltip title="Open settings">
            <IconButton
              onClick={handleOpenUserMenu}
              sx={{
                p: 0,
                marginLeft: {
                  xs: "5px",
                  sm: "20px",
                  md: "20px",
                },
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/2.jpg"
                sx={{
                  width: {
                    xs: 35,
                    sm: 40,
                    md: 40,
                  },
                  height: {
                    xs: 35,
                    sm: 40,
                    md: 40,
                  },
                }}
              />
              <ArrowDropDownIcon />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center" padding={"2px 10px"}>
                  {setting}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
          <Button
            variant="outlined"
            sx={{
              marginLeft: "10px",
              display: {
                xs: "none",
                sm: "inline",
                md: "inline",
              },
            }}
            size="small"
          >
            Register Now
          </Button>
        </Box>
      </AppBar>
    </Box>
  );
}
