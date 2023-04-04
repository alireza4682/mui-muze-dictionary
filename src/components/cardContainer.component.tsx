import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import OneCard from "./oneCard.component";
import { RootState, useAppDispatch } from "../store/store";
import { oneCardType } from "../store/slices/word.slice";
import { removeAllCards } from "../store/slices/word.slice";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/system";
import SpeedDial from "@mui/material/SpeedDial";
import Close from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";

const CardContainer = () => {
  const cards = useSelector((store: RootState) => store.word.cards);
  const dispatch = useAppDispatch();

  const onCloseAllCards = () => {
    dispatch(removeAllCards());
  };

  const onListChange = useCallback(
    (cards: oneCardType[]) => {
      return (
        <AnimatePresence mode="popLayout">
          {cards.map((card, _) => {
            return (
              <Grid xs={2} sm={2} md={2} key={card.headWord}>
                <motion.div
                  key={card.headWord}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <OneCard {...card} />
                </motion.div>
              </Grid>
            );
          })}
        </AnimatePresence>
      );
    },
    [cards]
  );

  // const onListMemo = useMemo(() => onListChange(cards), [cards.length]);

  return (
    <Box sx={{ position: "relative" }}>
      <SpeedDial
        ariaLabel="close all cards"
        sx={{ position: "absolute", top: 16, right: 16 }}
        icon={<Close />}
        onClick={() => onCloseAllCards()}
      />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 6, md: 8, lg: 10, xl: 12 }}
      >
        {onListChange(cards)}
      </Grid>
    </Box>
  );
};

export default CardContainer;
