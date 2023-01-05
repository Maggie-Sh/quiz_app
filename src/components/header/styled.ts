import styled from "styled-components";
import { inline_padding } from "../../shared/styled";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  padding: 10px;
  ${inline_padding}
  background-color: #ac3b61;
`;

export const Logo = styled(Link)`
  font-size: 34px;
  line-height: 40px;
  font-style: oblique;
  font-weight: 700;
  color: #fff;
`;
