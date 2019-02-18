import React from 'react'
import './footer.css'
import {Row, Col, InputGroup, Button, InputGroupAddon, Input} from 'reactstrap'


let icons = ['fab fa-facebook-f', 'fab fa-twitter', 'fab fa-instagram', 'fab fa-pinterest']

const Footer = props =>(

    <div className = 'footer'>
    <Row  className = "sub">
    <Col md = '4'>
        <ul>
            <li>FLORAL SUBCRIPTIONS</li>
            <li>WEDDINGS</li>
            <li>CUSTOMS FOR BUSINESS</li>
            <li>CORPORATE GIFTING</li>
            <li>CAREERS</li>
            <li>ABOUT US</li>
            <li>SEED PROGRAM</li>
            <li>IN THE NEWS</li>
            <li>CONTACT</li>
        </ul>
          </Col>
          <Col md ='2' >
          <div className = 'social'>
           {icons.map(icons => 
            <i className = {icons} social ></i>
           )}
           </div>
          </Col>
          <Col md = '6'>
          <div className = 'form'>
          <InputGroup >
          <Input placeholder = "Subscribe" />
            <InputGroupAddon addontype = "append">
                <Button color = 'secondary'>Submit</Button>
            </InputGroupAddon>
          </InputGroup>
          </div>
          </Col>
        </Row>
    </div>

)

export default Footer