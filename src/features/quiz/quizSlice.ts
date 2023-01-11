import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { Questions, SelectAnswerPayload } from "./types";

const initialState: Questions = [];

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<Questions>) => action.payload,
    clearList: () => initialState,
  },
});

export const { setList, clearList } = quizSlice.actions;

export default quizSlice.reducer;
