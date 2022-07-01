import styled from 'styled-components';

export const StyledQuoteBox = styled.section`
  /* Styling for Quote box body */
  width: 30rem;
  max-width: 70%;
  overflow: visible;
  text-align: center;
  padding: 2rem 1rem 0 1rem;
  border-radius: 0.25rem;
  margin: auto auto 0 auto;
  background: ${({ theme }) => theme.colors.card};
  border: solid ${({ theme }) => theme.colors.pop} 1px;
  transition: all ease-in-out 0s;
  box-shadow: 20px 20px 20px #262d333b;

  @media (min-width: 900px) {
    padding: 3rem 5rem 0 5rem;
  }
  h3 {
    margin: 0 auto;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.pop};
    letter-spacing: 0.1rem;
  }

  h1 {
    margin: 3rem auto;
    font-size: 1.5rem;
    letter-spacing: 0.2rem;
    line-height: 2.5rem;
    font-weight: 100;
    color: ${({ theme }) => theme.colors.text};
  }

  #line {
    width: 100%;
    height: 1px;
    margin-bottom: 2rem;
    border-radius: 5px;
    background-color: #ffffff0e;
  }
  /* Refresh button */
  button {
    width: 4rem;
    height: 4rem;
    border: none;
    margin: 0 auto;
    background-size: 50%;
    border-radius: 300rem;
    transition: all 0.3s;
    transition: box-shadow 0.5s cubic-bezier(0, 1.7, 1, 0.93);
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

  .clicked {
    animation: clicked 0.3s ease;
  }

  .fadeOut {
    animation: fadeOut 0.5s 0s;
    animation-fill-mode: forwards;
  }

  .fadeIn {
    animation: fadeIn 0.5s 0s;
    animation-fill-mode: forwards;
  }
  @keyframes clicked {
    0% {
      box-shadow: 0px 0px 0px 00px ${({ theme }) => theme.colors.pop},
        0px 0px 0px 00px ${({ theme }) => theme.colors.pop};
      transform: translateY(60%) scale(0.5);
    }
    80% {
      box-shadow: 0px 0px 0px 80px transparent, 0px 0px 0px 30px transparent;
      transform: translateY(60%) scale(1.3);
    }
    100% {
      transform: translateY(60%) scale(1);
    }
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
