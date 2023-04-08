import { createSlice } from "@reduxjs/toolkit";

export type synType = {
  headWord: string;
  score: number;
};

export type oneCardType = {
  headWord: string;
  syn: synType[];
  mode: TendPoint;
};

type Tcode =
  | "syn"
  | "jjs"
  | "jjb"
  | "trg"
  | "ant"
  | "spc"
  | "gen"
  | "com"
  | "par"
  | "rhy"
  | "nry"
  | "hom"
  | "cns";

export type TendPoint = "ml" | "sl" | "sp" | `rel_${Tcode}`;

type wordStateType = {
  currentWord: string;
  cards: oneCardType[];
  mode: TendPoint;
};

const wordSlice = createSlice({
  name: "headWord",
  initialState: { currentWord: "", cards: [], mode: "ml" } as wordStateType,
  reducers: {
    setHeadWord: (state, action) => {
      state.currentWord = "";
      state.currentWord = action.payload;
    },
    removeCard: (state, action) => {
      const cardToDelete = action.payload;
      state.cards = state.cards.filter((card) => {
        return JSON.stringify(card) !== JSON.stringify(cardToDelete);
      });
    },
    removeAllCards: (state) => {
      state.cards = [];
      state.currentWord = "";
    },
    onFetchSuccess: (state, action) => {
      const exist = state.cards.find(
        (card) =>
          card.headWord === state.currentWord && card.mode === state.mode
      );
      if (!exist && state.currentWord) {
        state.cards.push({
          headWord: state.currentWord,
          syn: action.payload,
          mode: state.mode,
        });
      } else if (exist) {
      }
    },
    setMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

const { actions, reducer } = wordSlice;
export const {
  setHeadWord,
  removeCard,
  removeAllCards,
  onFetchSuccess,
  setMode,
} = actions;
const wordReducer = reducer;
export default wordReducer;
