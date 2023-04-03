import { createTheme } from "@mui/material/styles";
import { purple, green } from "@mui/material/colors";
import "@fontsource/charmonman/400.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/tenor-sans/400.css";

export const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: "Tenor Sans,Montserrat,Charmonman",
    button: {
      textTransform: "capitalize",
    },
  },
});
