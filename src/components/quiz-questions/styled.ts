import styled from "styled-components";
import { df_ac, typo } from "../../shared/styled";

export const QuizHeader = styled.h5`
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  text-align: right;
`;

export const Content = styled.div`
  ${df_ac}
  width: 100%;
  overflow-x: hidden;
`;

interface QuestionProps {
  currentIndex: number;
}

export const Question = styled.div<QuestionProps>`
  min-width: 100%;
  transform: translateX(${({ currentIndex }) => `${currentIndex * -100}%`});
  transition: transform 250ms ease-in;
`;

export const QuestionHeader = styled.h3`
  ${typo}
  text-align: center;
`;

export const Options = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 10px 0;
`;

export const Option = styled.button`
  padding: 10px 20px;
  font-size: 20px;
  border: 3px solid #bab2b5;
  border-radius: 5px;
  &:active:hover {
    background-color: #ebebeb;
  }
  &.correct {
    border-color: #0cc078;
    background-color: #bbf1c4;
  }
  &.wrong {
    border-color: #ff817a;
    background-color: #ffe2e1;
  }
  &:disabled {
    cursor: default;
  }
`;
