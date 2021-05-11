import React, { useState } from 'react';
import DownArrow from '../../icon/down-arrow.svg';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const accordian = {
  open: { opacity: 1, height: 'auto' },
  close: { opacity: 0, height: 0 },
};

const buttonAnimation = {
  open: { rotate: 180 },
  close: { rotate: 0 },
};

function QNA({ question, a1, a2, className }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={className}>
      <div
        className="question"
        role="button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h4>{question}</h4>

        <img
          className="icon"
          src={DownArrow}
          alt={DownArrow}
          variants={buttonAnimation}
          initial="close"
          animate={isOpen ? 'open' : 'close'}
          transition={{ delay: 1 }}
          exit="close"
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="answer"
            variants={accordian}
            initial="close"
            animate={isOpen ? 'open' : 'close'}
            exit="close"
          >
            <p>{a1}</p>
            <p>{a2}</p>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="line"></div>
    </div>
  );
}

const StyledQNA = styled(QNA)`
  /* *{
    border: 1px solid #547444
  } */
  margin-top: 2rem;
  .question {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
  }
  .icon {
    width: 2rem;
    cursor: pointer;
  }
  .line {
    width: 100%;
    height: 0.4rem;
    background: #3b3a3a;
    border-radius: 1rem;
    margin-top: 0.3rem;
  }
`;

export default StyledQNA;
