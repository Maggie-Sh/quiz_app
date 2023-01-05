import styled, { css } from "styled-components";
import { df_ac } from "../../shared/styled";

const typo = css`
  font-size: 16px;
`;

export const QuizHeader = styled.div`
  ${df_ac}
  justify-content: flex-end;
  gap: 5px;
  ${typo}
`;

export const Select = styled.div`
  & button {
    ${typo}
  }
`;

export const Options = styled.div``;

export const Option = styled.button``;
