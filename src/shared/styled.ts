import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const main_padding = css`
  padding: 20px;
`;

export const inline_padding = css`
  padding-inline: 20px;
`;

export const df_ac = css`
  display: flex;
  align-items: center;
`;

export const df_ac_jb = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const df_ac_jc = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface ButtonLinkProps {
  center?: string;
}

export const ButtonLink = styled(Link)<ButtonLinkProps>`
  font-size: 28px;
  line-height: 32px;
  font-weight: 700;
  text-decoration: none;
  display: block;
  width: fit-content;
  &::first-letter {
    text-transform: uppercase;
  }
  margin: ${({ center }) => (center ? "0 auto" : "0")};
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #ac3b61;
  color: #fff;
  &:hover {
    opacity: 0.9;
  }
`;
