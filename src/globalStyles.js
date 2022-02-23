import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
}
html, body ,#root{
    height:100%;
    margin:0;
}
#root{
    font-family: 'Indie Flower', cursive;
    font-size:16px;
}

`;

export default GlobalStyle;
