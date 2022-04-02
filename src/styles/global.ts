import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{ 
      /*Reset*/
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-decoration: none;
      list-style: none;
      font-size: 62.5%;
      border: none;
      /*Colors*/
      --blue: #5429CC;
      --blue-light: #6933FF;
      --green: #33CC95;
      --red: #E62E4D;
      --shape: #FFFFFF;
      --title: #363F5F;
      --text: #969CB3;
      --background: #F0F2F5;
      /*Fonts*/
      font-family: 'Poppins', sans-serif;
  }

  body{
    background-color: var(--background);
  }
`