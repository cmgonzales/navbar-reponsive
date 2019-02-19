import React from 'react'
import './body.css'
import Text from './Ui/text'
import { Button } from 'reactstrap'
import { Col, Row, Container} from 'reactstrap'



const Body = props => (
    <div className='rows'>
        <Container fluid>
          <Row>
                <Col md='8' lg = '7'>
                    <div className="touch">
                        <h1 style={{ color: "white" }} className = "heading">THE<br /> PERFECT TOUCH</h1>
                        <h4 className="headinginfo">Custom floral arragemewnt tailored to your <br /> style and space. Starting at $75 per delivery.</h4>
                        <h4 className="headinginfo">Schedule a complimentary design consultation today.</h4>

                    </div>
                </Col>
                <Col md='4' lg = '5'>
                    <div className='user_input'>
                        <Text />
                        <Button color="danger" className='button'>Submit</Button>
                    </div>
                </Col>
            </Row>
            </Container>
     </div>
     


        )
        
        
        export default Body;
        
        
