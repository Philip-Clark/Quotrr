import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url(${({ theme }) => theme.fonts.imports});

*{
  color:${({ theme }) => theme.colors.text};
  &::selection{
    background-color: ${({ theme }) => theme.colors.body};
  }
}

h1{
  font-family: ${({ theme }) => theme.fonts.fontA};
  margin-bottom: 5rem;
  text-align: center;
  font-size: 4rem;
}

#root{
  height: 100vh;
}

body{
  font-family: ${({ theme }) => theme.fonts.fontB};
  background: ${({ theme }) => theme.colors.body};
  overflow: visible;
  height:100vh;
  padding: 0;
  margin:0;
}

footer{
  align-content: space-evenly;
  justify-content: center;
  flex-direction: row;
  text-align: center;
  position: fixed;
  flex-wrap: wrap;
  bottom: 0.5rem;
  display: flex;
  width: 100vw;

  a{
  margin: 0 0.625rem;
  opacity: 80%;
  }
}

@media (min-width: 900px) {
  body{
    overflow-y:hidden;
  }
  h1{
  margin-top: 10rem;

  }
}
`;
