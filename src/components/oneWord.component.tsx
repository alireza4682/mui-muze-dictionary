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

const OneWord = (word: any, mode: TendPoint) => {
  const dispatch = useAppDispatch();
  const { status, data } = useQueryWord(mode, word);

  const makeNewCard = (newWord: string, mode: TendPoint) => {
    dispatch(setHeadWord(newWord));
    if (status === "success") {
      dispatch(onFetchSuccess(data));
    }
  };

  return (
    <Box component="div">
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "200px",
          margin: "6px",
          alignItems: "center",
        }}
      >
        <Typography sx={{ ml: "20px" }}>{`${word.word}`}</Typography>
        <IconButton onClick={() => makeNewCard(word.word, mode)}>
          <ArrowRightIcon sx={{ color: "blue" }} />
        </IconButton>
      </Box>
      <Divider variant="middle" />
    </Box>
  );
};
export default OneWord;
