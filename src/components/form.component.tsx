import { ChangeEvent, FormEvent } from "react";
import { useSelector } from "react-redux";
import useQueryWord from "../hooks/queryWord";
import { onFetchSuccess, setHeadWord } from "../store/slices/word.slice";
import { RootState, useAppDispatch } from "../store/store";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "red",
    },
    "&:hover fieldset": {
      borderColor: "yellow",
    },
    "&.Mui-focused fieldset": {
      borderColor: "green",
    },
  },
});

function Form() {
  const word = useSelector((store: RootState) => store.word.currentWord);
  const mode = useSelector((store: RootState) => store.word.mode);
  const dispatch = useAppDispatch();

  const { status, data } = useQueryWord(mode, word);

  const searchWord = (e: FormEvent) => {
    e.preventDefault();
    if (status === "success") {
      dispatch(onFetchSuccess(data));
    }
  };

  const onChangeBox = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setHeadWord(e.target.value));
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      onSubmit={searchWord}
    >
      <CssTextField
        id="outlined-basic"
        label="search a word"
        onChange={onChangeBox}
        margin="normal"
      />
      <Button
        variant="contained"
        sx={{ backgroundColor: "gray" }}
        startIcon={<SearchIcon />}
        onClick={searchWord}
      >
        Search
      </Button>
    </Box>
  );
}

export default Form;
