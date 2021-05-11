import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Navbar({ className }) {
  return (
    <div className={className}>
      <nav>
        <img src="https://img.icons8.com/plasticine/70/000000/camera--v2.png" role='button' onClick={()=> goto='/'} />
        <ul>
          <li>
            <Link to="/">About Us</Link>
          </li>
          <li>
            <Link to="/ourwork">Our Work</Link>
          </li>
          <li>
            <Link to="/contect">Contect Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

const StyledNavbar = styled(Navbar)`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  min-height:10vh;
  margin-top: 0.6rem;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom:3vh;
  }
  img {
    cursor: pointer;
    margin-left: 2rem;
  }
  ul {
    width: 60%;
    text-decoration: none;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
  }
  li a {
    text-decoration: none;
    font-size: 1.4rem;
    font-weight: 700;
    border-bottom: 3px solid green;
    transition:0.2s all ease;
    &:hover{
      color:#312f2f;
      border:none;
    }
  }

  @media screen and (max-width:1000px){
    nav{
      flex-direction:column;
    }
    ul{
      width:100%;
      justify-content:space-around;
    }
  }
`;

export default StyledNavbar;
