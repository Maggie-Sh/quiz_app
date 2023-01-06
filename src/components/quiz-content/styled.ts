import styled, { css } from "styled-components";
import { df_ac } from "../../shared/styled";
const expandIcon: string = require("../../assets/expandIcon.svg").default;

const typo = css`
  font-size: 16px;
`;

const border = css`
  border: 1px solid #555;
`;

export const QuizHeader = styled.div`
  ${df_ac}
  justify-content: flex-end;
  gap: 5px;
  ${typo}
`;

export const Select = styled.div`
  position: relative;
  &.expanded {
    & .select-btn {
      border-radius: 5px 5px 0 0;
      &::before {
        transform: translateY(-50%) rotate(180deg);
      }
    }
    & .select-options {
      display: unset;
    }
  }
`;

export const SelectButton = styled.button`
  ${typo}
  ${border}
  padding: 5px 8px;
  min-width: 50px;
  border-radius: 5px;
  text-align: right;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    background-image: url(${expandIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 10px;
    height: 8px;
  }
`;

export const Options = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  ${border}
  border-top: 0;
  border-radius: 0 0 5px 5px;
  ${df_ac}
  flex-direction: column;
  max-height: 60px;
  overflow-y: overlay;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background: #f5f0f2;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #d9b2bf;
    border-radius: 10px;
  }
  display: none;
`;

export const Option = styled.button`
  width: 100%;
  padding: 2px 10px;
  text-align: right;
  &:hover {
    background-color: #f5f0f2;
  }
`;
