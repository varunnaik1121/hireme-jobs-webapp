import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./MaterialTheme/theme";
import { UserProvider } from "./context/userContext";
const App = React.lazy(() => import("./App"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </UserProvider>
);
