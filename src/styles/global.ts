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

  .Modal {
    background-color: white;
    width: 100%;
    max-width: 576px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    padding: 6.4rem 4.8rem;
    background-color: var(--background);
    border-radius: 0.5rem;
  }
  
  .Overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: hsla(0, 0%, 0%, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`