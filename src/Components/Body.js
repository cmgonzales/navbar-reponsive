import React from 'react'
import './body.css'
import Text from './Ui/text'
import { Container, Row, Col, Button } from 'reactstrap'



const center = {
  paddingTop: '180px'
}

const Body = props => (

    <div className="cover">
        <div className='img'>

            <Container>
                <Row style = {center}>
                    <Col md="8" style = {{textAlign:"center", paddingTop: '40px'}}>
                        <h1 style = {{color: "white"}}>THE<br /> PERFECT TOUCH</h1>
                        <h4 className = "headinginfo">Custom floral arragemewnt tailored to your <br/> style and space. Starting at $75 per delivery.</h4>
                        <h4 className = "headinginfo">Schedule a complimentary design consultation today.</h4>
                    </Col>
                    <Col md="4">
                        <div className="textArea" >
                            <Text title = "First Name"/>
                            <Text title = "Phone"/>
                            <Text title = "Email"/>
                            <Text title = "City"/>
                           <Button style = {{marginLeft: '230px', marginTop:'20px'}} color="danger">Submit</Button>
                            
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>


    </div>

)


export default Body;


