import styled from "styled-components";
import { Link } from "react-router-dom";
import { df_ac_jc } from "../../shared/styled";

export const Heading = styled.h1`
  text-align: center;
  font-size: 34px;
  line-height: 38px;
  margin-bottom: 10px;
`;

export const Info = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 700;
`;

export const Nav = styled.nav`
  margin-top: 20px;
  display: block;
  width: 100%;
  ${df_ac_jc}
  flex-direction: column;
  gap: 8px;
`;

export const CustomLink = styled(Link)`
  font-size: 24px;
  font-weight: 700;
  color: #ac3b61;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: calc(100% + 1px);
    left: 0;
    width: 100%;
    height: 3px;
    border-radius: 5px;
    background-color: #ac3b61;
    transform: scale(0);
    transition: transform 150ms ease-out;
    transform-origin: left;
  }
  &:hover::after {
    transform: scale(1);
  }
`;
