import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*::before,
*::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body,
html {
    margin: 0;
    padding: 0;
    max-width: 100vw;

    box-sizing: border-box;
    scroll-behavior: smooth;

    word-wrap: break-word;
    overflow-wrap: break-word;
    overflow-x: hidden;
}
`