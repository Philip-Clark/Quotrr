import styled from 'styled-components';

export const StyledHeader = styled.header`
  text-align: center;
  max-width: 50rem;
  margin: 0 auto 3rem auto;
  padding-top: 5rem;
  padding-bottom: 5rem;

  // Using props for values
  background-color: ${({ theme }) => theme.colors.header};

  transition: all ease 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;
