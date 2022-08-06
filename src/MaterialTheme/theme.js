import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(98, 0, 238)",
    },
    secondary: {
      main: "#1B1D2D",
    },
  },

  typography: {
    fontFamily: "Poppins,sans-serif",
  },
});
