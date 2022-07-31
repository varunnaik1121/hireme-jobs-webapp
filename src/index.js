import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ThemeProvider from "@mui/styles/ThemeProvider";
import { theme } from "./components/theme/theme";
import { UserProvider } from "./context/userContext";
const App = React.lazy(() => import("./App"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
    <App />
  </UserProvider>
);
