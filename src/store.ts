import { configureStore } from "@reduxjs/toolkit";
import quizSliceReducer from "./features/quiz/quizSlice";
import correctAnswersCountSliceReducer from "./features/correct-answers-count/correctAnswersCountSlice";

export const store = configureStore({
  reducer: {
    quiz: quizSliceReducer,
    correctAnswersCount: correctAnswersCountSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
