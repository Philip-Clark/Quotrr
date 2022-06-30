import styled from 'styled-components';

export const StyledFloatingBox = styled.section`
  background: ${({ theme }) => theme.colors.card};
  border-radius: 10px;
  box-shadow: 10px 10px 30px #0000001d;
  border: solid ${({ theme }) => theme.colors.pop} 1px;
  max-width: 70%;
  width: 30rem;
  /* width: max-content; */
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  transition: all ease-in-out 0s;
  padding: 2rem 1rem;
  margin: auto;
  margin-bottom: 0;
  padding-bottom: 0;
  overflow: visible;
  /* transform: translateY(10vh) translateY(-50%); */
  @media (min-width: 900px) {
    padding: 2rem 5rem;
    padding-bottom: 0;
  }
  h3 {
    margin: 0 auto;
    font-size: 0.75rem;
    letter-spacing: 0.1rem;
    color: ${({ theme }) => theme.colors.pop};
  }

  h1 {
    margin: 2rem auto;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.white};
  }

  #line {
    width: 100%;
    height: 1px;
    margin-bottom: 0;
    background-color: #ffffff1d;
    border-radius: 5px;
  }

  button {
    transition: all 0.1s ease;
    width: 4rem;
    height: 4rem;
    background-color: ${({ theme }) => theme.colors.pop};
    border-radius: 300rem;
    margin: 0 auto;

    transform: translateY(60%);
    box-shadow: 10px 10px 5x #0000007e;
    border: none;
    background-image: url('r.png');
    background-size: 50%;
    background-position: center;
    background-repeat: no-repeat;

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

  .refresh {
    animation: refresh 1s;
  }

  /* @keyframes refresh {
    0% {
      background-image: url('r.gif');
    }
    99% {
      background-image: url('r.gif');
    }
    100% {
      background-image: url('r.png');
    }
  } */
`;
