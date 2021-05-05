import React from 'react';
import home1 from '../../img/home1.jpg';
import styled from 'styled-components';
import { Button, Image} from '../elements';

function AboutSection({ className }) {
  return (
    <div className={className}>
      <div className="desciption">
        <div className="title">
          <div className="hide">
            <h1>We Work To Make</h1>
          </div>
          <div className="hide">
            <h1>
              your <span>dreams</span>
            </h1>
          </div>
          <div className="hide">
            <h1>Come True</h1>
          </div>
        </div>
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
  max-height: 90vh;
  .desciption {
    /* border:5px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex: 1.5;
    p {
      width: 70%;
    }
  }

  .image {
    flex: 1;
  }

  display: flex;
  padding: 5rem 10rem;
  padding-left: 13rem;
  font-family: 'Rubik', sans-serif;
  color: #363636;
  ${Button} {
    width: 30%;
  }
`;

export default StyledAboutSection;
