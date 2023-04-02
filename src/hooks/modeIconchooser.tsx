import { TendPoint } from "../store/slices/word.slice";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import SpatialTrackingIcon from "@mui/icons-material/SpatialTracking";
import LyricsIcon from "@mui/icons-material/Lyrics";
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";

const ModeIcon = (mode: TendPoint) => {
  switch (mode) {
    case "ml":
      return <SwapVertIcon sx={{ color: "greenyellow" }} />;
    case "sl":
      return <SpatialTrackingIcon sx={{ color: "greenyellow" }} />;
    case "rel_nry":
      return <LyricsIcon sx={{ color: "greenyellow" }} />;
    case "rel_trg":
      return <LightbulbCircleIcon sx={{ color: "greenyellow" }} />;
    default:
      return <div />;
  }
};
export default ModeIcon;
