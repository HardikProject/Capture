import styled from 'styled-components';

export const Button = styled.button`
  
  font-size:1.3rem;
  padding:0.7rem 1.2rem;
  border:none;
  font-weight:bold;
  cursor: pointer;
  border-radius:0.2rem;
  background:transparent;
  color:#00203f;
  transition:all 0.5s ease;
  border:2px solid #00203f;
  &:focus{
      outline:none;
  }
  &:hover{
   transform:translateY(-0.3rem)
  }
  
`;
