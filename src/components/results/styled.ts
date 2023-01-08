import styled, { css } from "styled-components";
import { df_ac, df_ac_jc, typo } from "../../shared/styled";

const circle = css`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

interface ProgressBarProps {
  degree: number;
}

export const ProgressBar = styled.div<ProgressBarProps>`
  ${circle}
  padding: 15px;
  background-color: #e5e5e5;
  & .inner {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #fff;
    ${df_ac_jc}
    font-size: 20px;
    font-weight: 400;
  }
  background-image: ${({ degree }) =>
    degree <= 90
      ? `conic-gradient(
      #ff817a 0deg,
      #ff817a ${degree}deg,
      transparent ${degree}deg
    )`
      : degree < 180
      ? `conic-gradient(
      #d61e5c 0deg,
      #d61e5c ${degree}deg,
      transparent ${degree}deg
    )`
      : `conic-gradient(
      #0cc078 0deg,
      #0cc078 ${degree}deg,
      transparent ${degree}deg
    )`};
  @media (max-width: 420px) {
    margin: 20px 0;
  }
`;

export const Counter = styled.p`
  ${typo}
  font-weight: 400;
  text-align: center;
  margin-bottom: 5px;
`;

export const Message = styled.p`
  ${typo}
`;

export const Section = styled.section`
  ${df_ac}
  gap:30px;
  &.dir-column {
    @media (max-width: 420px) {
      flex-direction: column;
      gap: 10px;
      width: 100%;
      & button,
      & a {
        width: 100%;
      }
    }
  }
`;
