import useQueryWord from "../hooks/queryWord";
import { oneCardType, removeCard } from "../store/slices/word.slice";
import { useAppDispatch } from "../store/store";
import OneWord from "./oneWord.component";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardAction from "@mui/material/CardActions";
import CloseIcon from "@mui/icons-material/Close";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import ModeIcon from "../hooks/modeIconchooser";
import CardSkeleton from "./cardSkeleton.component";

const OneCard = (card: oneCardType) => {
  const { headWord, mode } = card;
  const dispatch = useAppDispatch();

  const { status, data } = useQueryWord(mode, headWord);

  const closeCard = (card: oneCardType) => {
    dispatch(removeCard(card));
  };

  return (
    <Card
      sx={{
        width: "250px",
        borderRadius: "15px",
        backgroundColor: "pink",
        margin: "15px",
      }}
      variant="elevation"
    >
      <CardHeader
        avatar={ModeIcon(mode)}
        action={
          <IconButton onClick={() => closeCard(card)}>
            <CloseIcon />
          </IconButton>
        }
        title={headWord}
      />

      <CardContent
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        {Array.isArray(data) ? (
          data
            .filter((_, idx) => idx < 5)
            .map((s) => <OneWord word={s.word} key={s.word} mode={mode} />)
        ) : (
          <CardSkeleton />
        )}
      </CardContent>
    </Card>
  );
};

export default OneCard;
