import { createTheme } from "@mui/material/styles";
import { cyan, pink } from "@mui/material/colors";
import "@fontsource/montserrat/700.css";
import "@fontsource/tenor-sans/400.css";
import "@fontsource/unna/700.css";
import "@fontsource/asap/700.css";

export const theme = createTheme({
  palette: {
    primary: {
      main: pink[500],
    },
    secondary: {
      main: cyan[500],
    },
  },
  typography: {
    fontFamily: "Tenor Sans,Montserrat,Charmonman, Unna",
    button: {
      textTransform: "capitalize",
    },
  },
  transitions: {
    easing: {
      // This is the most common easing curve.
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      // Objects enter the screen at full velocity from off-screen and
      // slowly decelerate to a resting point.
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      // Objects leave the screen at full velocity. They do not decelerate when off-screen.
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      // The sharp curve is used by objects that may return to the screen at any time.
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
  },
});
