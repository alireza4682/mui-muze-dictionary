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

const Card = (card: oneCardType) => {
  const { headWord, mode } = card;
  const dispatch = useAppDispatch();
  const [flip, setFlip] = useState(false);
  const [back, setBack] = useState("");
  const [backWord, setBackWord] = useState("");

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

  const onFlip = (s: any) => {
    setFlip(true);
    setBack(s.defs);
    setBackWord(s.word);
  };
  return <div></div>;
};
