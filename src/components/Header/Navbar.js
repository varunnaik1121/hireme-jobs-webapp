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
import {
  Tooltip,
  IconButton,
  MenuItem,
  Avatar,
  Menu,
  Skeleton,
} from "@mui/material";
import { useGlobalUser } from "../../context/userContext";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
const arr = [
  { name: "Home", icon: <HomeIcon /> },
  { name: "Jobs", icon: <PeopleAltIcon /> },
  { name: "Companies", icon: <WorkHistoryIcon /> },
  { name: "About Us", icon: <NotificationsActiveIcon /> },
];

export default function ButtonAppBar({ isCompany, loading }) {
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
                key={i}
                sx={{
                  fontFamily: "Poppins,sans-serif",
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
                }}
              >
                {item.name}
              </Typography>
            );
          })}
        </Box>

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
              {/* {currentUser?.photoURL ? (
                <Avatar
                  src={currentUser?.photoURL.toString()}
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
                    bgcolor: "text.secondary",
                  }}
                ></Avatar>
              ) : ( */}
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
                src={currentUser.photoURL}
              >
                {currentUser?.displayName.toString().charAt(0)}
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
                  >
                    {"profile"}
                  </Typography>
                </MenuItem>
                <MenuItem>
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
                  >
                    {"Applications"}
                  </Typography>
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
              height={50}
              sx={{
                display: {
                  xs: "none",
                  md: "block",
                  sm: "block",
                },
              }}
            ></Skeleton>
          ) : isCompany ? (
            <Button
              variant="outlined"
              sx={{
                marginLeft: "10px",
                display: {
                  xs: "none",
                  sm: "inline",
                  md: "inline",
                },
                padding: "8px 15px",
                borderRadius: "2px",
              }}
              size="small"
              component={Link}
              to="/postJob"
            >
              Post Job
            </Button>
          ) : (
            <Button
              variant="outlined"
              sx={{
                marginLeft: "10px",
                display: {
                  xs: "none",
                  sm: "inline",
                  md: "inline",
                },
                padding: "8px 15px",
                borderRadius: "2px",
              }}
              size="small"
            >
              Register Now
            </Button>
          )}
        </Box>
      </AppBar>
    </Box>
  );
}
