import styled from 'styled-components';

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: transparent;
  border-radius: 8px;
  font-weight: light;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--mainDark);
    color: var(--mainWhite);
    border-radius: 8px;
  }
  &:focus {
    outline: none;
  }
`;
