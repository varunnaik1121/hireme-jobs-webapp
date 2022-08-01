import { AppBar, Button, Toolbar } from "@mui/material";
import React from "react";

const Header = ({ logOut }) => {
  return (
    <AppBar>
      <Toolbar sx={{ display: "flex", justifyContent: "space-bet" }}>
        <Button onClick={logOut} sx={{ color: "white", background: "red" }}>
          logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
