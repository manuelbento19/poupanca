import {createGlobalStyle} from 'styled-components';

export const GlobalTheme = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
    body{
        height: 100vh;
        width: 100vw;
    }
    #root{
        height: 100%;
        width: 100%;
    }
`