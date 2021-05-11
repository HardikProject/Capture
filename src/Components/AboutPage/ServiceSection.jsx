import React from 'react';
import time from '../../icon/chronometer.svg';
import diaphragm from '../../icon/diaphragm.svg';
import partnership from '../../icon/partnership.svg';
import salary from '../../icon/salary.svg';
import home2 from '../../img/home2.jpg';
import Icon from '../../Components/smallHalper/Icon';
import styled from 'styled-components';
import {Image } from '../elements';

function ServiceSection({ className }) {
  return (
    <div className={className}>
      <div className="discription">
        <h2>
          High <span>Quality</span> services
        </h2>
        <div className="cards">
          <Icon
            text="Efficient"
            icon={time}
            desc=" Lorem ipsum dolor sit amet.Lorem ipsum "
          />
          <Icon
            text="TeamWork"
            icon={partnership}
            desc=" Lorem ipsum dolor sit amet.Lorem ipsum "
          />
          <Icon
            text="Diaphragm"
            icon={diaphragm}
            desc=" Lorem ipsum dolor sit amet.Lorem ipsum "
          />
          <Icon
            text="Affordable"
            icon={salary}
            desc=" Lorem ipsum dolor sit amet.Lorem ipsum "
          />
        </div>
      </div>
      <div className="image">
        <Image src={home2} alt="camera" />
      </div>
    </div>
  );
}

const StyledServiceSection = styled(ServiceSection)`
  display: flex;
  flex-direction: row-reverse;
  min-height: 100vh;
  width: 100%;
  .discription {
    flex: 1.7;
    h2 {
      text-align: center;
      /* padding: 2rem; */
      height: 10%;
    }
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    height: inherit;
    height: 90%;
  }
  .image {
    flex: 1;
  }
  /* padding: 5rem 5rem; */
`;

export default StyledServiceSection;
