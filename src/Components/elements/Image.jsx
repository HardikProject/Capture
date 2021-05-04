import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: all 0.5s ease;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    transform: translateY(-0.3rem);
  }
`;
