import { TendPoint } from "../store/slices/word.slice";
import ModeIcon from "../hooks/modeIconchooser";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";

const Mode = () => {
  return (
    <SpeedDial>
      <Box>{ModeIcon("ml")}</Box>
      <Box>{ModeIcon("sl")}</Box>
      <Box>{ModeIcon("rel_nry")}</Box>
      <Box>{ModeIcon("rel_trg")}</Box>
    </SpeedDial>
  );
};
export default Mode;
