import React from 'react';
import DownArrow from '../../icon/down-arrow.svg'

function QNA({ question, a1, a2 }) {
  return (
    <div className="question">
      <h4>{question}</h4>
      <img className="icon" src={DownArrow} alt={DownArrow} />
      <div className="answer">
        <p>{a1}</p>
        <p>{a2}</p>
      </div>
    </div>
  );
}

export default QNA;
