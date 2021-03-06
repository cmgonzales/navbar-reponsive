import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Works from './Ui/works'
import './the_works.css'

const the_works = props => ( 
  <div className = "steps">
  <Container>
    <Row>
    <Col md='4'>
    <Works
        number = '-1-'
        intro = 'DESIGN'
        info = {`Your personal design consultant \n meets with you to duscuss style, \n preference and space`}
    />
      </Col>
      <Col md='4'>
      <Works
        number = '-2-'
        intro = 'SCHEDULE'
        info = {`We provide a custom proposal for \n floral service based on your schedule \n (weekly, bi-weekly or monthly)`}
    />
      </Col>
      <Col md='4'>
      <Works
        number = '-3-'
        intro = 'ENJOY'
        info = {`We hand deliver your custom \n arrangement for you to enjoy \n Its that simple`}
    />
      </Col>
      </Row>
      </Container>
    </div>
  );
    


export default the_works;