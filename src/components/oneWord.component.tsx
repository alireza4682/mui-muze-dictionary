import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import IconButton from "@mui/material/IconButton";
import { TendPoint } from "../store/slices/word.slice";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import MeaningModal from "./meaningModal.component";
import Button from "@mui/material/Button";
import { TData } from "../hooks/queryWord";

export type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  defs: string[];
};

type TOneWordProps = {
  wordToShow: TData;
  mode: TendPoint;
  callBack: (newWord: string, mode: TendPoint) => void;
};

const OneWord = ({ wordToShow, mode, callBack }: TOneWordProps) => {
  const [open, setOpen] = useState(false);
  const defs = wordToShow.defs;
  const props = { open, setOpen, defs };

  return (
    <Box component="div">
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "200px",
          margin: "0px",
          alignItems: "center",
        }}
      >
        <Button onClick={() => setOpen(true)} color="success">
          <Typography>{wordToShow.word}</Typography>
        </Button>
        <IconButton onClick={() => callBack(wordToShow.word, mode)}>
          <ArrowRightIcon sx={{ color: "blue" }} />
        </IconButton>
      </Box>
      <Divider variant="middle" />
      {open ? <MeaningModal {...props} /> : null}
    </Box>
  );
};
export default OneWord;
