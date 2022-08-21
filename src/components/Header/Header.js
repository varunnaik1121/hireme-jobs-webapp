import { AppBar, Button, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Header = ({ logOut }) => {
  return (
    <AppBar color="primary">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button onClick={logOut} sx={{ color: "white", background: "red" }}>
          logout
        </Button>
        <Link to={"postJob"}>Post job</Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
