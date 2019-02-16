import React from 'react'
import './footer.css'
import {Row, Col} from 'reactstrap'


const Footer = props =>(

    <div className = 'footer'>
    <Row  className = "sub">
    <Col md = '3'>
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
        </Row>
    </div>

)

export default Footer