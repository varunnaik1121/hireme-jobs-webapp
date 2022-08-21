import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(98, 0, 238)",
    },
    secondary: {
      main: "#1B1D2D",
    },
    text: {
      secondary: "#696a6c",
      primary: "#100f10",
    },
    error: {
      main: "#FF3131",
    },
    success: {
      main: "#03c04a",
    },
  },
  typography: {
    fontFamily: "'Raleway', sans-serif",
    h6: {
      color: "#100f10",
    },
    allVariants: {
      textTransform: "capitalize",
    },
  },
});
