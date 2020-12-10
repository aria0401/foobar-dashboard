import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text1};

    transition: all 0.25s linear;
  }
  
  .Main{
background-color: ${({ theme }) => theme.body};
  }
  .panel{
      background-color: ${({ theme }) => theme.panel1};

  }
  
  .Order {
      color: ${({ theme }) => theme.orderColor};
  }
 
  

  `;
