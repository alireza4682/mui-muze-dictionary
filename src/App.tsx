import { ChangeEvent, FormEvent } from "react";
import { useSelector } from "react-redux";
import useQueryWord from "./hooks/queryWord";
import { onFetchSuccess, setHeadWord } from "./store/slices/word.slice";
import { RootState, useAppDispatch } from "./store/store";

function App() {
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

  return <div></div>;
}

export default App;
