import { TendPoint } from "../store/slices/word.slice";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import SpatialTrackingIcon from "@mui/icons-material/SpatialTracking";
import LyricsIcon from "@mui/icons-material/Lyrics";
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";

type TSize = "small" | "medium" | "large";

const ModeIcon = (mode: TendPoint, size: TSize) => {
  switch (mode) {
    case "ml":
      return <SwapVertIcon sx={{ color: "gray" }} fontSize={size} />;
    case "sl":
      return <SpatialTrackingIcon sx={{ color: "gray" }} fontSize={size} />;
    case "rel_nry":
      return <LyricsIcon sx={{ color: "gray" }} fontSize={size} />;
    case "rel_trg":
      return <LightbulbCircleIcon sx={{ color: "gray" }} fontSize={size} />;
    default:
      return <div />;
  }
};
export default ModeIcon;
