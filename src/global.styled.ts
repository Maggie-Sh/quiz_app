import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    font-family: Roboto, sans-serif;
    /* background-color: #f8f8f8; */
    /* background-color:#faf5f7; */
    background-color: #f5f0f2;
    color:#222222;
    height: 100vh;
    overflow: hidden;
}
* {
    margin:0;
    padding:0;
    box-sizing: border-box;
}
button {
    background-color: transparent;
    border:0;
    cursor: pointer;
}
a {
    text-decoration: none;
}
`;
