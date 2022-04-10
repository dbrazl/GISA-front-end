import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    border: 0;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    background: #fafafa;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, button, a, h1, p {
    font: 14px 'Roboto', sans-serif;
    color: #000;
  }

  a {
    text-decoration: none;
    color: #000;
    
    &:visited {
      color: #000;
    }
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;