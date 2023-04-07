import { TendPoint } from "../store/slices/word.slice";
import SpatialTrackingIcon from "@mui/icons-material/SpatialTracking";
import LyricsIcon from "@mui/icons-material/Lyrics";
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";
import SwapVerticalCircleRoundedIcon from "@mui/icons-material/SwapVerticalCircleRounded";

type TSize = "small" | "medium" | "large";

const ModeIcon = (mode: TendPoint, size: TSize) => {
  switch (mode) {
    case "ml":
      return (
        <SwapVerticalCircleRoundedIcon
          sx={{ color: "#c51162" }}
          fontSize={size}
        />
      );
    case "sl":
      return <SpatialTrackingIcon sx={{ color: "#c51162" }} fontSize={size} />;
    case "rel_nry":
      return <LyricsIcon sx={{ color: "#c51162" }} fontSize={size} />;
    case "rel_trg":
      return <LightbulbCircleIcon sx={{ color: "#c51162" }} fontSize={size} />;
    default:
      return <div />;
  }
};
export default ModeIcon;
