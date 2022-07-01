import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

*{
  margin:0;
  transition: all 0.5s ease;
  color:${({ theme }) => theme.colors.text};
  font-family:${({ theme }) => theme.fonts.fontB};
  
  &::selection{
    background-color: #152023;
  }
}
h1{
  z-index: 10;
  font-size: 4rem;
  margin-top: 1rem;
  position: relative;
  text-align: center;
  margin-bottom: 5rem;
  font-family:${({ theme }) => theme.fonts.fontA};
}

#root{
  height: 100vh;
}

body{
  margin:0;
  padding: 0;
  height:100vh;
  overflow: visible;
  background: ${({ theme }) => theme.colors.body};
  
}

@media (min-width: 900px) {
  body{
    overflow-y:hidden;
  }
  h1{
    margin-top: 10rem;
  }
  
}

footer{
  width: 100vw;
  display: flex;
  bottom: 0.5rem;
  position: fixed;
  flex-wrap: wrap;
  text-align: center;
  flex-direction: row;
  justify-content: center;
  align-content: space-evenly;

  a{
    opacity: 30%;
    margin: 0 0.625rem;
    text-decoration: none;
    color:${({ theme }) => theme.colors.text};
    font-family:${({ theme }) => theme.fonts.fontA};
  }
}



`;

export default GlobalStyles;
