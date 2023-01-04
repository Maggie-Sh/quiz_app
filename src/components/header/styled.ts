import styled from "styled-components";
import { inline_padding, df_ac_jb, df_ac } from "../../shared/styled";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  padding: 15px 0;
  ${inline_padding}
  ${df_ac_jb}
  background-color: #ac3b61;
`;

export const Logo = styled(Link)`
  font-size: 34px;
  line-height: 40px;
  font-style: oblique;
  font-weight: 700;
  color: #fff;
`;

export const RightContent = styled.div`
  ${df_ac}
  gap:20px;
`;

export const CustomLink = styled(Link)`
  font-size: 24px;
  color: #fff;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: calc(100% + 5px);
    left: 0;
    width: 100%;
    height: 2px;
    border-radius: 5px;
    background-color: #fff;
    transform: scale(0);
    transition: transform 300ms;
    transform-origin: left;
  }
  &:hover::after {
    transform: scale(1);
  }
`;
