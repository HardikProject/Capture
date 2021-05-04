import React from 'react';

function QNA({ question, a1, a2 }) {
  return (
    <div className="question">
      <h4>{question}</h4>
      <div className="answer">
        <p>{a1}</p>
        <p>{a2}</p>
      </div>
    </div>
  );
}

export default QNA;
