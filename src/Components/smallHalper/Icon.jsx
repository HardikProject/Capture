import React from 'react';
import styled from 'styled-components';

function Icon({ icon, text, desc, className }) {
  return (
    <div className={className}>
      <div className="card">
        <div className="head">
          <img src={icon} alt={text} className="icon" />
          <h4>{text}</h4>
        </div>
        <p>{desc}</p>
      </div>
    </div>
  );
}

const StyledIcon = styled(Icon)`
  cursor: pointer;
  padding: 1rem;
  border: 2px solid #ccc;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  flex-basis: 17rem;
  border-radius: 0.3rem;
  .head {
    align-items: center;
    h4 {
      background-color: #79bcd1;
      padding: 0.5rem 1rem;
      border-radius: 0.3rem;
    }
    display: flex;
    justify-content: space-around;
  }
`;

export default StyledIcon;
