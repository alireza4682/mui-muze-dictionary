import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import IconButton from "@mui/material/IconButton";
import {
  onFetchSuccess,
  setHeadWord,
  TendPoint,
} from "../store/slices/word.slice";
import useQueryWord from "../hooks/queryWord";
import { useAppDispatch } from "../store/store";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import MeaningModal from "./meaningModal.component";
import Button from "@mui/material/Button";

export type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  defs: string[];
};

const OneWord = (word: any, mode: TendPoint) => {
  const dispatch = useAppDispatch();
  const { status, data } = useQueryWord(mode, word);
  const [open, setOpen] = useState(false);

  const makeNewCard = (newWord: string, mode: TendPoint) => {
    dispatch(setHeadWord(newWord));
    if (status === "success") {
      dispatch(onFetchSuccess(data));
    }
  };

  const defs = word.defs;

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
          <Typography>{`${word.word}`}</Typography>
        </Button>
        <IconButton onClick={() => makeNewCard(word.word, mode)}>
          <ArrowRightIcon sx={{ color: "blue" }} />
        </IconButton>
      </Box>
      <Divider variant="middle" />
      {open ? <MeaningModal {...props} /> : null}
    </Box>
  );
};
export default OneWord;
