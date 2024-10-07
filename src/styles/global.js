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
    background-color: #ECECEC;

    word-wrap: break-word;
    overflow-wrap: break-word;
    overflow-x: hidden;
}

:root{
    --corprincipal: #532567;
    --corsecundaria: #BA68C8;
    --corterciaria: #F4E9E1;

    --varprincipal: #280F3E;
    --varsecundaria: #9FA8D0;
    --varterciaria: #CECBC5;
}
`