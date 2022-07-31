import { AppBar, Button, Toolbar } from "@mui/material";
import React from "react";

const Header = ({ logOut }) => {
  return (
    <AppBar sx={{ bgColor: "primary.light !important" }}>
      <Toolbar>Logo</Toolbar>
      <Button onClick={logOut}>logout</Button>
    </AppBar>
  );
};

export default Header;
