import {
  Avatar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useEffect } from "react";
import { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useGlobalUser } from "../../../context/userContext";
const UsersRequestCard = ({ name, email, resume, id }) => {
  const { deleteDataById } = useGlobalUser();
  const colors = [
    "#85dcb",
    "#c38d9e",
    "#e27d60",
    "#f64c72",
    "#daad86",
    "#bee4af",

    "#3feee6",
    "1a1a1d",

    "#3500d3",
  ];

  console.log({ id });
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [color, setColor] = useState("");
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    setColor(getRandomColor());
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
       

        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid rgba(0,0,0,.1)",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",

          textAlign: "left",
          alignItems: "center",

          padding: {
            xs: "4px",
            sm: "4px 20px",
            md: "5px 20px",
          },
        }}
      >
        <Avatar
          sx={{
            bgcolor: color,
            margin: "10px 0",
            fontWeight: "700",
          }}
        >
          {name.charAt(0).toUpperCase()}
        </Avatar>
        <Typography fontWeight={600} fontSize={14}>
          {name}
        </Typography>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Button
          size="small"
          variant="outlined"
          sx={{ fontWeight: "400px" }}
          endIcon={<MailOutlineIcon />}
        >
          <a
            href={`mailto:${email}`}
            style={{
              textDecoration: "none",
              width: "100%",
              height: "100%",
              fontWeight: "200px",
              color: "rgb(98, 0, 238)",
            }}
          >
            send mail
          </a>
        </Button>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Button variant="outlined" size="small">
          <a
            href={resume}
            rel="noreferrer"
            target={"_blank"}
            style={{ textDecoration: "none", color: "rgb(98, 0, 238)" }}
          >
            view resume
          </a>
        </Button>
      </Box>
      <div>
        <IconButton
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={() =>
              deleteDataById(
                id,
                "jobApplications",
                handleClose,
                "application removed successfully"
              )
            }
            sx={{
              padding: "4px 10px",
              fontSize: 12,
              fontWeight: 600,
              color: "palette.error.main",
            }}
          >
            delete{" "}
          </MenuItem>
        </Menu>
      </div>
    </Box>
  );
};

export default UsersRequestCard;
