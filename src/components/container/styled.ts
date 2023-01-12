import styled from "styled-components";
import { df_ac_jc } from "../../shared/styled";

export const Main = styled.main`
  padding: 20px;
  width: 100%;
  height: calc(100vh - 70px);
  ${df_ac_jc}
`;

interface CardProps {
  sm?: string;
}

export const Card = styled.div<CardProps>`
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
  width: ${({ sm }) => (sm ? "40%" : "50%")};
  min-height: 250px;
  max-height: 90%;
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.1);
  ${df_ac_jc}
  flex-direction: column;
  gap: 20px;
  @media (max-width: 1024px) {
    width: ${({ sm }) => (sm ? "50%" : "60%")};
  }
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;
