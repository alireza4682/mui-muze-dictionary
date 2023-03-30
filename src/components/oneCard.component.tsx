import useQueryWord from "../hooks/queryWord";
import {
  oneCardType,
  onFetchSuccess,
  removeCard,
  setHeadWord,
  TendPoint,
} from "../store/slices/word.slice";
import { useAppDispatch } from "../store/store";
import { useState } from "react";
import OneWord from "./oneWord.component";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardAction from "@mui/material/CardActions";
import CloseIcon from "@mui/icons-material/Close";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";

const OneCard = (card: oneCardType) => {
  const { headWord, mode } = card;
  const dispatch = useAppDispatch();

  const { status, data } = useQueryWord(mode, headWord);

  const makeNewCard = (newWord: string, mode: TendPoint) => {
    dispatch(setHeadWord(newWord));
    if (status === "success") {
      dispatch(onFetchSuccess(data));
    }
  };

  const closeCard = (card: oneCardType) => {
    dispatch(removeCard(card));
  };

  return (
    <Card sx={{ minWidth: "325" }}>
      <CardHeader
        avatar={}
        action={
          <IconButton>
            <CloseIcon onClick={() => closeCard(card)} />
          </IconButton>
        }
        title={headWord}
      />

      <CardContent></CardContent>
    </Card>
  );
};

export default OneCard;
