import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PlayCircleRoundedIcon from "@mui/icons-material/PlayCircleRounded";
import IconButton from "@mui/material/IconButton";
import { TendPoint } from "../store/slices/word.slice";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import MeaningModal from "./meaningModal.component";
import Button from "@mui/material/Button";
import { TData } from "../hooks/queryWord";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  defs: string[];
  wordToPass: string;
};

type TOneWordProps = {
  wordToShow: TData;
  mode: TendPoint;
  callBack: (newWord: string, mode: TendPoint) => void;
};

const OneWord = ({ wordToShow, mode, callBack }: TOneWordProps) => {
  const [open, setOpen] = useState(false);
  const defs = wordToShow.defs;
  const wordToPass = wordToShow.word;
  const props = { open, setOpen, defs, wordToPass };
  const cards = useSelector((store: RootState) => store.word.cards);
  const mainMode = useSelector((store: RootState) => store.word.mode);
  const seen = cards.find(
    (card) => card.headWord === wordToShow.word && card.mode === mainMode
  );

  return (
    <Box component="div">
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "220px",
          margin: "5px",
          alignItems: "center",
        }}
      >
        <Button onClick={() => setOpen(true)} color="inherit">
          <Typography fontFamily="Unna" fontSize={18}>
            {wordToShow.word}
          </Typography>
        </Button>
        <IconButton
          onClick={() => callBack(wordToShow.word, mode)}
          sx={{ bgcolor: "" }}
        >
          <PlayCircleRoundedIcon
            sx={{ color: !seen ? "#0288d1" : "#c51162" }}
          />
        </IconButton>
      </Box>
      <Divider variant="middle" />
      {open ? <MeaningModal {...props} /> : null}
    </Box>
  );
};
export default OneWord;
