import styled from 'styled-components';

export const StyledQuoteBox = styled.section`
  @import url(${({ theme }) => theme.fonts.imports});

  font-family: ${({ theme }) => theme.fonts.fontB};
  box-shadow: 10px 10px 30px #0000001d;
  transition: all ease-in-out 0s;
  border: solid ${({ theme }) => theme.colors.pop} 1px;
  background: ${({ theme }) => theme.colors.card};
  letter-spacing: 0.2rem;
  border-radius: 10px;
  line-height: 1.7rem;
  text-align: center;
  padding: 2rem 1rem;
  padding-bottom: 0;
  overflow: visible;
  font-weight: 100;
  max-width: 70%;
  width: 30rem;
  margin: auto;
  margin-bottom: 0;

  h3 {
    letter-spacing: 0.1rem;
    color: ${({ theme }) => theme.colors.pop};
    font-size: 0.75rem;
    margin: 0 auto;
  }

  h1 {
    text-align: center;
    margin: 2rem auto;
    font-size: 1.5rem;
  }

  #line {
    background-color: ${({ theme }) => theme.colors.pop};
    border-radius: 5px;
    margin-bottom: 0;
    opacity: 20%;
    width: 100%;
    height: 1px;
  }

  button {
    box-shadow: 10px 10px 5x #0000007e;
    background-color: ${({ theme }) => theme.colors.pop};
    background-image: url('r.png');
    background-repeat: no-repeat;
    background-position: center;
    transform: translateY(60%);
    transition: all 0.1s ease;
    border-radius: 300rem;
    background-size: 50%;
    margin: 0 auto;
    border: none;
    height: 4rem;
    width: 4rem;

    &:hover {
      transform: translateY(60%) scale(0.9);
    }
    &:active {
      transform: translateY(60%) scale(0.7);
    }
  }

  .fadeOut {
    animation: fadeOut 0.5s 0s;
  }

  .fadeIn {
    animation: fadeIn 0.5s 0s;
  }

  @keyframes fadeIn {
    from {
      transform: scale(0.5);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      transform: scale(1);
      opacity: 1;
    }
    to {
      transform: scale(0.5);
      opacity: 0;
    }
  }

  @media (min-width: 900px) {
    padding: 2rem 5rem;
    padding-bottom: 0;
  }
`;
