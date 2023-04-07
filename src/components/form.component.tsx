import { ChangeEvent, FormEvent } from "react";
import { useSelector } from "react-redux";
import useQueryWord from "../hooks/queryWord";
import { onFetchSuccess, setHeadWord } from "../store/slices/word.slice";
import { RootState, useAppDispatch } from "../store/store";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import { Button, IconButton } from "@mui/material";
import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import ModeIcon from "../hooks/modeIconchooser";
import { motion } from "framer-motion";

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
      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <CssTextField
          id="outlined-basic"
          label="search a word"
          onChange={onChangeBox}
          margin="normal"
        />
        <Box sx={{ ml: 3, mt: 1 }}>
          <motion.div
            animate={{ scale: [1, 1.2, 1.2, 1, 1] }}
            transition={{ repeat: Infinity, repeatDelay: 0.5 }}
          >
            {ModeIcon(mode, "large")}
          </motion.div>
        </Box>
      </Box>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#3d5afe", mr: 10 }}
        startIcon={<SearchIcon />}
        onClick={searchWord}
      >
        Search
      </Button>
    </Box>
  );
}

export default Form;
