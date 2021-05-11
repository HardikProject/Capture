import React from 'react';
import styled from 'styled-components';
import Movie from './Movie';
import movie1 from '../../img/movie1.jpg';
import movie2 from '../../img/movie2.jpg';
import movie3 from '../../img/movie3.jpg';
import { motion } from 'framer-motion';
import { pageAnimation } from '../../Animation';

function OurWork({ className }) {
  return (
    <motion.div
      className={className}
      variants={pageAnimation}
      initial="close"
      animate="open"
      exit="close"
    >
      <Movie movieImage={movie1} movieName="WRATH OF MAN" />
      <Movie movieImage={movie2} movieName="SPIRAL: FROM THE BOOK OF SAW" />
      <Movie movieImage={movie3} movieName="ARMY OF THE DEAD" />
    </motion.div>
  );
}

const StyledOurWork = styled(OurWork)`
  margin-bottom: 2rem;
`;

export default StyledOurWork;
