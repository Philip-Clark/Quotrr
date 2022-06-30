import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

*{
  color:${({ theme }) => theme.colors.white};
  margin:0;
  transition: all 0.5s ease;
  &::selection{
    background-color: #152023;
  }
}
h1{
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 4rem;
  text-align: center;
  margin-top: 10rem;
  margin-bottom: 5rem;
  z-index: 10;
}


body{
  margin:0;
  background: ${({ theme }) => theme.colors.body};
  height:100vh;
  overflow: hidden;
  padding: 0;
}

a{
  position: absolute;
  bottom: 0.5rem;
  text-align: center;
  width: 100%;
  opacity: 30%;
  color:${({ theme }) => theme.colors.white};
}



`;
