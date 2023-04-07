import ModeIcon from "../hooks/modeIconchooser";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import { setMode } from "../store/slices/word.slice";
import { useAppDispatch } from "../store/store";
import { styled } from "@mui/material/styles";
const actions = [
  { icon: ModeIcon("ml", "medium"), name: "MeansLike", setMode: "ml" },
  { icon: ModeIcon("sl", "medium"), name: "SoundsLike", setMode: "sl" },
  { icon: ModeIcon("rel_nry", "medium"), name: "Rhymes", setMode: "rel_nry" },
  { icon: ModeIcon("rel_trg", "medium"), name: "Trigers", setMode: "rel_trg" },
];
const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: "absolute",
  "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

const Mode = () => {
  const dispatch = useAppDispatch();
  const handleClick = (mode: string) => {
    dispatch(setMode(mode));
  };
  return (
    <Box
      sx={{
        transform: "translateZ(0px)",
        flexGrow: 1,
      }}
    >
      <StyledSpeedDial
        ariaLabel="Mode Selection"
        sx={{ position: "absolute", bottom: 16, left: 16 }}
        direction={"right"}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => handleClick(action.setMode)}
          />
        ))}
      </StyledSpeedDial>
    </Box>
  );
};
export default Mode;
