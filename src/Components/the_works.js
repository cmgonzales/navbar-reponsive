import React from 'react';
import { Row, Col } from 'reactstrap';
import './the_works.css'

const the_works = (props) => {
  return (
  <div className = "steps">
    <Row>
    <Col md='4'>
     <h1 className = "numbers"> - 1 -</h1>
     <p>DESIGN</p>
     <p>Your personal design consultant <br/> meets with you to duscuss style <br/> preference and space </p>
      </Col>
      <Col md='4'>
      <h1 className = "numbers"> - 2 -</h1>
      <p>SCHEDULE</p>
      <p>We provide a custome proposal for <br/> floral service based on your schedule <br/>(weekly, bi-weekly or monthly)</p>
      </Col>
      <Col md='4'>
      <h1 className = "numbers"> - 3 -</h1>
      <p>ENJOY</p>
      <p>We hand deliver your custom <br/> arrangements for you to enjoy. <br/>Its that simple</p>
      </Col>
      </Row>
   
    </div>
  );
};

export default the_works;