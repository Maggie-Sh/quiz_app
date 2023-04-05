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
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 23px;
  }
  @media (max-width: 420px) {
    font-size: 18px;
    line-height: 20px;
  }
`;

export const scrollbar = css`
  ::-webkit-scrollbar-track {
    background: #eee2dc;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #bab2b5;
    border-radius: 5px;
  }
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
  &.centered {
    margin: 0 auto;
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
  @media (hover: hover) {
    &:hover {
      opacity: 0.95;
    }
  }
  &:disabled {
    cursor: default;
    opacity: 0.8;
  }
  @media (max-width: 768px) {
    width: 100%;
    font-size: 24px;
    line-height: 26px;
    &.additional-m {
      max-width: calc(100% - 20px);
    }
  }
`;
