import React from 'react'
import './body.css'
import Text from './Ui/text'
import { Button } from 'reactstrap'
import Background from '../img/nature1.jpeg'
import { Col, Row, } from 'reactstrap'


const img = {
    height: `100vh`,
    width: '100%',
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    padding: '160px'


}
const Body = props => (
    <div style={img}>
    <div className = 'rows'>
        <Row>
        <Col md= '8'>
            <div className = "touch">
                <h1 style={{ color: "white" }}>THE<br /> PERFECT TOUCH</h1>
                <h4 className="headinginfo">Custom floral arragemewnt tailored to your <br /> style and space. Starting at $75 per delivery.</h4>
                <h4 className="headinginfo">Schedule a complimentary design consultation today.</h4>

            </div>
            </Col>
            <Col md = '4'>
            <div className = 'user_input'>
                <Text />
                <Button color="danger" className = 'button'>Submit</Button>
            </div>
            </Col>
            </Row>
</div>
    </div>



)


export default Body;


