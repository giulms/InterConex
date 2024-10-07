import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'FuturaBold';
    src: url('../src/assets/Futura Round Bold.ttf');
}

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
    background-color: #ECECEC;

    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: 'Poppins', sans-serif;

    word-wrap: break-word;
    overflow-wrap: break-word;
    overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6{
    font-family: 'FuturaBold';
}
`