import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  Tooltip,
  IconButton,
  MenuItem,
  Avatar,
  Menu,
  Skeleton,
  Badge,
} from "@mui/material";
import { useGlobalUser } from "../../context/userContext";
import { Link } from "react-router-dom";

import { useEffect } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";
import { useState } from "react";
const arr = [
  { name: "Home", icon: <HomeIcon />, path: "/" },
  { name: "Jobs", icon: <PeopleAltIcon />, path: "/jobs" },
  { name: "Companies", icon: <WorkHistoryIcon />, path: "/companies" },
  { name: "Favourites", icon: <FavoriteBorderIcon />, path: "favourites" },
];

export default function ButtonAppBar({ isCompany, loading, applications }) {
  useEffect(() => {
    handleCloseUserMenu();
  }, []);
  const { logOut, currentUser } = useGlobalUser();
  console.log(currentUser?.photoURL);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  console.log(currentUser?.photoURL);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  console.log({ applications });

  return (
    <Box>
      <AppBar
        position="relative"
        sx={{
          py: 2,
          backgroundColor: "#fff",
          color: "#000",
          width: {
            xs: "100%",
            md: "100vw",
            sm: "100vw",
          },
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          zIndex: 1000,
          boxShadow: "1px 1px 4px rgba(0,0,0,.2)",
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
                component="a"
                key={i}
                sx={{
                  fontFamily: "Poppins,sans-serif",
                  color: "text.primary",
                  mx: 3,
                  "&:hover": {
                    background: "#4045db",
                    color: "#f6f7f9",
                    fontWeight: 400,
                  },
                  cursor: "pointer",
                  padding: "4px 14px",
                  transition: "all .3s ease",
                  borderRadius: "2px",
                  textDecoration: "none",
                }}
                href={item.path}
              >
                {item.name}
              </Typography>
            );
          })}
        </Box>
        {currentUser && (
          <Box sx={{ flexGrow: 0, mx: 2, display: "flex" }}>
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
                    bgcolor: "text.primary",
                  }}
                  src={currentUser?.photoURL}
                >
                  {currentUser?.displayName.toString().charAt(0).toUpperCase()}
                </Avatar>

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
              onClick={handleCloseUserMenu}
            >
              {isCompany ? (
                <div>
                  <MenuItem>
                    <Typography
                      textAlign="center"
                      padding={"2px 15px 0 5px"}
                      component={Link}
                      to={"/companyProfile"}
                      sx={{
                        textDecoration: "none",
                        // color: "primary.main",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "text.secondary",
                      }}
                      onClick={handleCloseUserMenu}
                    >
                      {"profile"}
                    </Typography>
                  </MenuItem>
                  <MenuItem sx={{ display: "flex", alignItems: "center" }}>
                    <Typography
                      textAlign="center"
                      padding={"2px 15px 0 5px"}
                      component={Link}
                      to={"/jobApplications"}
                      sx={{
                        textDecoration: "none",
                        // color: "primary.main",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "text.secondary",
                      }}
                      onClick={handleCloseUserMenu}
                    >
                      Applications
                    </Typography>
                    <Badge
                      badgeContent={(applications && applications.length) || 0}
                      color="error"
                    >
                      <MarkunreadIcon color="action" fontSize="small" />
                    </Badge>
                  </MenuItem>
                  <MenuItem>
                    <Typography
                      textAlign="center"
                      padding={"2px 15px 0 5px"}
                      component={Link}
                      to={"/postJob"}
                      sx={{
                        textDecoration: "none",
                        // color: "primary.main",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "text.secondary",
                      }}
                    >
                      {"post Job"}
                    </Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={logOut}
                    sx={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "text.secondary",
                    }}
                  >
                    <Typography
                      textAlign="center"
                      padding={"2px 15px 0 5px"}
                      sx={{
                        fontSize: "14px",
                        color: "text.secondary",
                        fontWeight: 500,
                      }}
                    >
                      {"logout"}
                    </Typography>
                  </MenuItem>
                </div>
              ) : (
                <div>
                  <MenuItem>
                    <Typography
                      textAlign="center"
                      padding={"2px 15px 0 5px"}
                      component={Link}
                      to="/postJob"
                      sx={{
                        textDecoration: "none",
                        fontWeight: 500,

                        fontSize: "14px",
                        color: "text.secondary",
                      }}
                    >
                      {"Register Now"}
                    </Typography>
                  </MenuItem>
                  <MenuItem>
                    <Typography
                      textAlign="center"
                      padding={"2px 15px 0 5px"}
                      component={Link}
                      to="/favourites"
                      sx={{
                        textDecoration: "none",
                        fontWeight: 500,

                        fontSize: "14px",
                        color: "text.secondary",
                      }}
                    >
                      {"Favourites"}
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={logOut}>
                    <Typography
                      textAlign="center"
                      padding={"2px 15px 0 5px"}
                      sx={{ fontSize: "14px", color: "text.secondary" }}
                    >
                      {"log Out"}
                    </Typography>
                  </MenuItem>
                </div>
              )}
            </Menu>
            {loading ? (
              <Skeleton
                width={100}
                height={40}
                sx={{
                  display: {
                    xs: "none",
                    md: "block",
                    sm: "block",
                  },
                  marginLeft: "10px",
                }}
                variant="text"
              ></Skeleton>
            ) : isCompany ? (
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "2px",
                  padding: "0px 20px",
                  marginLeft: "10px",
                  display: {
                    xs: "none",
                    sm: "block",
                    md: "block",
                  },
                }}
                component={Link}
                to="/postJob"
              >
                Post Job
              </Button>
            ) : (
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "2px",
                  padding: "0px 20px",
                  marginLeft: "10px",
                  display: {
                    xs: "none",
                    sm: "block",
                    md: "block",
                  },
                }}
                component={Link}
                to="/postJob"
                size="small"
              >
                Register Now
              </Button>
            )}
          </Box>
        )}
      </AppBar>
    </Box>
  );
}
