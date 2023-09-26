import 'modern-normalize';
import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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

  p {
    margin: 0;
    padding: 0;
  }

  h1,h2,h3,h4 {
    margin: 0;
    padding: 0;
  }

  
`;