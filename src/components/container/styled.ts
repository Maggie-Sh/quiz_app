import styled from "styled-components";
import { df_ac_jc, df_ac } from "../../shared/styled";

export const Main = styled.main`
  padding: 20px;
  width: 100%;
  height: calc(100vh - 70px);
  ${df_ac_jc}
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
  min-width: 50%;
  min-height: 250px;
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.1);
  &.centered {
    ${df_ac_jc}
  }
  @media (max-width: 768px) {
    min-width: 80%;
  }
  @media (max-width: 480px) {
    min-width: 100%;
  }
`;
