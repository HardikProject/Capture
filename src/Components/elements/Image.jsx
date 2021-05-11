import styled from 'styled-components';

export const Image = styled.img`
  object-fit: cover;
  width : 400px;
  height: 450px;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
