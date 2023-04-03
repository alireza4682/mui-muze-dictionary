import ModeIcon from "../hooks/modeIconchooser";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import { setMode } from "../store/slices/word.slice";
import { useAppDispatch } from "../store/store";

const actions = [
  { icon: ModeIcon("ml", "medium"), name: "MeansLike", setMode: "ml" },
  { icon: ModeIcon("sl", "medium"), name: "SoundsLike", setMode: "sl" },
  { icon: ModeIcon("rel_nry", "medium"), name: "Rhymes", setMode: "rel_nry" },
  { icon: ModeIcon("rel_trg", "medium"), name: "Trigers", setMode: "rel_trg" },
];

const Mode = () => {
  const dispatch = useAppDispatch();
  const handleClick = (mode: string) => {
    dispatch(setMode(mode));
  };
  return (
    <Box sx={{ height: 320, transform: "-translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="Mode Selection"
        sx={{ position: "absolute", bottom: 16, left: 16 }}
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
      </SpeedDial>
    </Box>
  );
};
export default Mode;
