import { createSlice } from "@reduxjs/toolkit";

interface CorrectAnswersCount {
  count: number;
}

const initialState: CorrectAnswersCount = {
  count: 0,
};

export const correctAnswersCountSlice = createSlice({
  name: "correctAnswersCount",
  initialState,
  reducers: {
    increase: (state) => {
      return {
        count: state.count + 1,
      };
    },
    unset: () => initialState,
  },
});

export const { increase, unset } = correctAnswersCountSlice.actions;

export default correctAnswersCountSlice.reducer;
