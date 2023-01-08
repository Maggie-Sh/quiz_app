import styled, { css } from "styled-components";

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

export const typo = css`
  font-size: 24px;
  line-height: 28px;
`;

export const FilledButton = styled.button`
  font-size: 28px;
  line-height: 32px;
  font-weight: 700;
  text-align: center;
  padding: 10px 20px;
  &.small {
    ${typo}
    padding: 8px 16px;
  }
  text-decoration: none;
  display: block;
  width: max-content;
  &::first-letter {
    text-transform: uppercase;
  }
  border-radius: 10px;
  background-color: #ac3b61;
  color: #fff;
  &:hover {
    opacity: 0.95;
  }
  &:disabled {
    cursor: default;
    opacity: 0.8;
  }
`;
