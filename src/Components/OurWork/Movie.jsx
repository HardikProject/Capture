import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Movie({ className, movieName, movieImage }) {
  return (
    <div className={className}>
      <h2>{movieName}</h2>
      <Link to="/">
        <img src={movieImage} alt={movieName} />
      </Link>
    </div>
  );
}

const StyledMovie = styled(Movie)`
  h2 {
    padding: 1rem;
    border-bottom: 5px solid #a09d9d;
    margin-bottom: 1rem;
  }
  img {
    border-radius: 0.4rem;
    width: 100%;
    height: 90vh;
    object-fit: cover;
  }
`;

export default StyledMovie;
