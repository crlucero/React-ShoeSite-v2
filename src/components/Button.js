import styled from 'styled-components';

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: transparent;
  font-weight: light;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--maineDark);
    color: var(--mainWhite);
  }
  &:focus {
    outline: none;
  }
`;
