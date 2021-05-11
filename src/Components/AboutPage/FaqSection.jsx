import React from 'react';
import QNA from '../smallHalper/QNA';
import styled from 'styled-components';

const FaqSection = ({ className }) => {
  return (
    <div className={className}>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <QNA
        question="How Do I Start?"
        a1="Lorem ipsum dolor sit amet."
        a2="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus, neque.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus, neque.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus, neque.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus, neque.  "
      />
      <QNA
        question="Daily Schedule"
        a1="Lorem ipsum dolor sit amet."
        a2="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus, neque.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus, neque.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus, neque.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus, neque.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus, neque."
      />
      <QNA
        question="Diferrent Payment Methods"
        a1="Lorem ipsum dolor sit amet."
        a2="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus, neque.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus, neque.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus, neque.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus, neque.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus, neque."
      />
      <QNA
        question="What Products do you offer."
        a1="Lorem ipsum dolor sit amet.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Necessitatibus, neque.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Necessitatibus, neque.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Necessitatibus, neque.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Necessitatibus, neque."
        a2="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus, neque."
      />
    </div>
  );
};

const StyledFaqSections = styled(FaqSection)`
  margin: 0 auto;
  margin-bottom:2rem;
  width: 70%;
  h2{
    text-align: center;
    border-bottom: 10px solid #52a752;
    border-radius:0.3rem;
    border-width:50%;
    display: inline-block;
    padding: 0.4rem;
  }
`;

export default StyledFaqSections;
