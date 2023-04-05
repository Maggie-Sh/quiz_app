import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { Questions } from "./types";

const initialState: Questions = [];

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<Questions>) => action.payload,
    clearList: () => initialState,
  },
});

console.log("testing, lalala");

export const { setList, clearList } = quizSlice.actions;

export default quizSlice.reducer;
