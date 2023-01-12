import styled from "styled-components";
import { typo } from "../../shared/styled";

export const QuizHeader = styled.h5`
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  text-align: right;
  @media (max-width: 1024px) {
    font-size: 16px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #eee2dc;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #bab2b5;
    border-radius: 5px;
  }
`;

interface QuestionProps {
  currentIndex: number;
}

export const Question = styled.div<QuestionProps>`
  min-width: 100%;
  transform: translateX(${({ currentIndex }) => `${currentIndex * -100}%`});
  transition: transform 250ms ease-in;
  padding: 0 10px;
  & .options-wrapper {
    max-height: 120px;
    overflow: hidden;
    &.current {
      max-height: 100%;
      height: fit-content;
      overflow: auto;
    }
    & pre {
      background-color: #ebebeb;
      border-radius: 5px;
      padding: 10px;
      margin-bottom: 20px;
      width: 100%;
      overflow-x: scroll;
    }
    @media (max-width: 768px) {
      max-height: 220px;
    }
  }
`;

export const QuestionHeader = styled.h3`
  ${typo}
  text-align: center;
  margin-bottom: 20px;
`;

export const Options = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 10px;
  @media (max-width: 1024px) {
    margin-top: 0;
    gap: 10px;
    &.vertical {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Option = styled.button`
  padding: 10px 20px;
  font-size: 20px;
  color: #222;
  border: 3px solid #bab2b5;
  border-radius: 5px;
  @media (hover: hover) {
    &:active:hover {
      background-color: #ebebeb;
    }
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
