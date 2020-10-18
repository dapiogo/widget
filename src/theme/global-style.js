import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing:border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    /* //1rem === 10px */
    html {
        font-size: 62.5%; 
    }
   
    body {
        font-size: 1.6rem; 
        font-family: 'Nunito', sans-serif;
        height: 100%;
        background: #f3f5ff;
    }
`;

export default GlobalStyle;
