import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Navbar({ className }) {
  return (
    <div className={className}>
      <nav>
        <img src="https://img.icons8.com/plasticine/70/000000/camera--v2.png" />
        <ul>
          <li>
            <Link to="/">About Us</Link>
          </li>
          <li>
            <Link to="/work">Our Work</Link>
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
  height: clamp(10vh, 10vh, 10vh);
  margin-top: 1rem;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  }
`;

export default StyledNavbar;
