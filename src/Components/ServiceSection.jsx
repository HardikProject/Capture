import React from 'react';
import time from '../icon/chronometer.svg';
import diaphragm from '../icon/diaphragm.svg';
import partnership from '../icon/partnership.svg';
import salary from '../icon/salary.svg';
import home2 from '../img/home2.jpg';
import Icon from './Icon';

function ServiceSection() {
  return (
    <div className="services">
      <div className="discription">
        <h2>
          High <span>quality</span> services
        </h2>
        <div className="card">
          <Icon
            text="Efficient"
            icon={time}
            desc=" Lorem ipsum dolor sit amet."
          />
          <Icon
            text="TeamWork"
            icon={partnership}
            desc=" Lorem ipsum dolor sit amet."
          />
          <Icon
            text="Diaphragm"
            icon={diaphragm}
            desc=" Lorem ipsum dolor sit amet."
          />
          <Icon
            text="Affordable"
            icon={salary}
            desc=" Lorem ipsum dolor sit amet."
          />
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="camera" />
      </div>
    </div>
  );
}

export default ServiceSection;
