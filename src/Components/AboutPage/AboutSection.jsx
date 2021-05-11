import React from 'react';
import home1 from '../../img/home1.jpg';
import styled from 'styled-components';
import { Button, Image } from '../elements';
import { motion } from 'framer-motion';
import { textAnimation } from '../../Animation';

function AboutSection({ className }) {
  return (
    <div className={className}>
      <div className="desciption">
        <motion.div
          initial="close"
          animate="open"
          exit="close"
          transition={{ staggerChildren: 0.5 }}
          className="title"
        >
          <motion.div variants={textAnimation} className="hide">
            <h1>We Work To Make</h1>
          </motion.div>
          <motion.div variants={textAnimation} className="hide">
            <h1>
              your <span>dreams</span>
            </h1>
          </motion.div>
          <motion.div variants={textAnimation} className="hide">
            <h1>Come True</h1>
          </motion.div>
        </motion.div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <Button>Contact Us</Button>
      </div>
      <div className="image">
        <Image src={home1} alt="Guy with Camera" />
      </div>
    </div>
  );
}

const StyledAboutSection = styled(AboutSection)`
  min-height: 90vh;
  .desciption {
    /* border:5px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    flex: 1.8;
    p {
      width: 70%;
    }
  }

  .image {
    flex: 1;
  }

  display: flex;
  padding: 2vw 3.2vw;
  font-family: 'Rubik', sans-serif;
  color: #363636;
  flex-wrap: wrap;
  ${Button} {
    width: 30%;
  }
  @media screen and (max-width: 1000px) {
    ${Button} {
      width: 80%;
    }
    min-height: 60vh;
  }
`;

export default StyledAboutSection;
