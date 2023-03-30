import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import OneCard from "./oneCard.component";
import { RootState, useAppDispatch } from "../store/store";
import { oneCardType } from "../store/slices/word.slice";
import { removeAllCards } from "../store/slices/word.slice";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import SpeedDial from "@mui/material/SpeedDial";
import Close from "@mui/icons-material/Close";

const CardContainer = () => {
  const cards = useSelector((store: RootState) => store.word.cards);
  const dispatch = useAppDispatch();
  const onCloseAllCards = () => {
    dispatch(removeAllCards());
  };

  const onListChange = useCallback(
    (cards: oneCardType[]) => {
      return cards.map((card, idx) => {
        return <OneCard {...card} key={idx} />;
      });
    },
    [cards]
  );

  const onListMemo = useMemo(() => onListChange(cards), [cards]);

  return (
    <Box>
      <SpeedDial
        ariaLabel="close all cards"
        sx={{ position: "absolute", top: 16, right: 16 }}
        icon={<Close />}
        onClick={() => onCloseAllCards()}
      />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {onListMemo}
      </Grid>
    </Box>
  );
};

export default CardContainer;
