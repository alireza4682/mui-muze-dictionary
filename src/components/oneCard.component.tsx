import useQueryWord from "../hooks/queryWord";
import {
  oneCardType,
  onFetchSuccess,
  removeCard,
  setHeadWord,
  TendPoint,
} from "../store/slices/word.slice";
import { useAppDispatch } from "../store/store";
import OneWord from "./oneWord.component";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import ModeIcon from "../hooks/modeIconchooser";
import CardSkeleton from "./cardSkeleton.component";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";

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
    <Paper
      elevation={20}
      sx={{
        width: "250px",
        height: "340px",
        borderRadius: "15px",
        backgroundColor: "gray",
        margin: "15px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          pt: 1,
          pl: 1,
          alignItems: "center",
          mb: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyItems: "start",
          }}
        >
          {ModeIcon(mode)}
          <Typography sx={{ ml: 2 }}>{headWord}</Typography>
        </Box>
        <IconButton onClick={() => closeCard(card)} sx={{ mr: 1 }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider variant="middle" />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {Array.isArray(data) ? (
          data
            .filter((_, idx) => idx < 5)
            .map((s) => (
              <OneWord
                wordToShow={s}
                key={s.word}
                mode={mode}
                callBack={makeNewCard}
              />
            ))
        ) : (
          <CardSkeleton />
        )}
      </Box>
    </Paper>
  );
};

export default OneCard;
