import 'modern-normalize';
import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue','Pathway Gothic One', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #40e0d0;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
      
  }

  .wrapper-container{
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    border: thick double #32a1ce;
  }

  ul{
    padding: 0;
    margin: 0;
    list-style: none;
  }

  li{
    padding: 0;
    margin: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }

  h1,h2,h3,h4 {
    margin: 0;
    padding: 0;
  }

  a{
    text-decoration: none;
  }
  
  hr{
    margin: 0;
    color: blue;
  }
`;