import { AppBar, Button, ThemeProvider, Toolbar } from "@mui/material";
import React from "react";
import { theme } from "../../MaterialTheme/theme";
const Header = ({ logOut }) => {
  return (
    <AppBar color="primary">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button onClick={logOut} sx={{ color: "white", background: "red" }}>
          logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
