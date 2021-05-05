import React from 'react';
import DownArrow from '../../icon/down-arrow.svg';
import styled from 'styled-components';

function QNA({ question, a1, a2, className }) {
  return (
    <div className={className}>
      <div className="question">
        <h4>{question}</h4>
        <img className="icon" src={DownArrow} alt={DownArrow} />
      </div>
      <div className="answer">
        <p>{a1}</p>
        <p>{a2}</p>
      </div>
      <div className="line"></div>
    </div>
  );
}

const StyledQNA = styled(QNA)`
  /* *{
    border: 1px solid #547444
  } */
  margin-top:2rem;
  .question {
    
    display: flex;
    justify-content: space-between;
  }
  .icon{
    width:2rem;
    cursor: pointer;
  }
  .line{
    width:100%;
    height:0.4rem;
    background:#3b3a3a;
    border-radius:1rem;
    margin-top:0.3rem;
  }
`;

export default StyledQNA;
