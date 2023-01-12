import styled from "styled-components";
import { df_ac, inline_padding } from "../../shared/styled";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  padding: 10px;
  ${inline_padding}
  background-color: #ac3b61;
  ${df_ac}
  justify-content: flex-end;
  gap: 10px;
`;

export const Logo = styled(Link)`
  font-size: 34px;
  line-height: 40px;
  font-style: oblique;
  font-weight: 700;
  color: #fff;
  margin-right: auto;
`;

export const IconLink = styled.a`
  width: 30px;
  height: 30px;
  & .MuiSvgIcon-root {
    font-size: 30px;
  }
  position: relative;
  &:hover .title {
    visibility: visible;
  }
`;

export const Title = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  border: 1px solid #222;
  border-radius: 5px;
  background-color: #fff;
  padding: 3px 8px;
  font-size: 14px;
  color: #222;
  visibility: hidden;
`;
