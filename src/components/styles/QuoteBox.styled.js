import styled from 'styled-components';

export const StyledQuoteBox = styled.section`
  width: 30rem;
  max-width: 70%;
  overflow: visible;
  text-align: center;
  padding: 2rem 1rem 0 2rem;
  border-radius: 10px;
  margin: auto auto 0 auto;
  background: ${({ theme }) => theme.colors.card};
  font-family: 'Oswald', sans-serif;
  border: solid ${({ theme }) => theme.colors.pop} 1px;
  transition: all ease-in-out 0s;
  box-shadow: 10px 10px 30px #0000001d;

  @media (min-width: 900px) {
    padding: 2rem 5rem 0 5rem;
  }
  h3 {
    margin: 0 auto;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.pop};
    letter-spacing: 0.1rem;
    font-family: 'Cormorant Garamond', serif;
  }

  h1 {
    margin: 2rem auto;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
  }

  #line {
    width: 100%;
    height: 1px;
    margin-bottom: 0;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.body};
  }

  button {
    width: 4rem;
    height: 4rem;
    border: none;
    margin: 0 auto;
    background-size: 50%;
    border-radius: 300rem;
    transition: all 0.1s ease;
    transform: translateY(60%);
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('r.png');
    background-color: ${({ theme }) => theme.colors.pop};
    box-shadow: 10px 10px 5x #0000007e;

    &:hover {
      transform: translateY(60%) scale(0.9);
    }
    &:active {
      transform: translateY(60%) scale(0.7);
    }
  }

  .fadeOut {
    animation: fadeOut 0.5s 0s;
    animation-fill-mode: forwards;
  }

  .fadeIn {
    animation: fadeIn 0.5s 0s;
    animation-fill-mode: forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.5);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0.5);
    }
  }
`;
