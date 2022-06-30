import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

*{
  color:${({ theme }) => theme.colors.text};
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

#root{
  height: 100vh;
}

body{
  margin:0;
  background: ${({ theme }) => theme.colors.body};
  height:100vh;
  padding: 0;
  overflow: visible;
  
}

@media (min-width: 900px) {
  body{
    overflow-y:hidden;
  }
  
}

footer{
  position: fixed;
  bottom: 0.5rem;
  text-align: center;
  display: flex;
  flex-direction: row;
  width: 100vw;
  flex-wrap: wrap;
  align-content: space-evenly;
  justify-content: center;
  
}

a{
  margin: 0 0.625rem;
  opacity: 30%;
  color:${({ theme }) => theme.colors.text};
}



`;
