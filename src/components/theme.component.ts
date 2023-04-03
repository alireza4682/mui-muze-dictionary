import { createTheme } from "@mui/material/styles";
import { purple, green } from "@mui/material/colors";
import "@fontsource/charmonman/400.css";

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
    fontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif,charmonman',
    button: {
      textTransform: "capitalize",
    },
  },
});
