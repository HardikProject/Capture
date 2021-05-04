import React from 'react';
import QNA from '../smallHalper/QNA';

const FaqSection = () => {
  return (
    <div className="faq">
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <QNA
        question="How Do I Start?"
        a1="Lorem ipsum dolor sit amet."
        a2="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus, neque."
      />
      <QNA
        question="Daily Schedule"
        a1="Lorem ipsum dolor sit amet."
        a2="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus, neque."
      />
      <QNA
        question="Diferrent Payment Methods"
        a1="Lorem ipsum dolor sit amet."
        a2="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus, neque."
      />
      <QNA
        question="What Products do you offer."
        a1="Lorem ipsum dolor sit amet."
        a2="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus, neque."
      />
    </div>
  );
};

export default FaqSection;
