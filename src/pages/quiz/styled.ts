import styled from "styled-components";
import { df_ac_jc, typo } from "../../shared/styled";

export const Counter = styled.p`
  font-size: 4rem;
  font-weight: 700;
  color: #ac3b61;
`;

export const CenteredContainer = styled.div`
  ${df_ac_jc}
  flex-direction: column;
  gap: 20px;
`;

export const QuizName = styled.h5`
  text-align: center;
  width: 100%;
  ${typo}
`;
