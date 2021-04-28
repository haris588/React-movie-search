import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin:0;
        padding:0;
    }

    html, body {
        font-family: 'Source Sans Pro', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        scroll-behaviour: smooth;
        background: #fff;
        font-size: 16px;
        line-height:1.5;
        
    }

    h1,h2,h3,p {
        margin:0;
        padding:0;
    }
`;