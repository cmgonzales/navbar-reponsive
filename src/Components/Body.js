import React from 'react'
import './body.css'
import Text from './Ui/text'
import { Container, Row, Col, Button } from 'reactstrap'
import Background from  '../img/nature1.jpeg'


const img = {
    height: `100vh`,
    width: '100%',
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}

const Body = props => (

        <div style  = {img}>

            <Container>
                <Row style = {{paddingTop: `180px`}}>
                    <Col md="8" style = {{textAlign:"center", paddingTop: '40px'}}>
                        <h1 style = {{color: "white"}}>THE<br /> PERFECT TOUCH</h1>
                        <h4 className = "headinginfo">Custom floral arragemewnt tailored to your <br/> style and space. Starting at $75 per delivery.</h4>
                        <h4 className = "headinginfo">Schedule a complimentary design consultation today.</h4>
                    </Col>
                    <Col md="3">
                        <div className="textArea" >
                            <Text title = "First Name"/>
                            <Text title = "Phone"/>
                            <Text title = "Email"/>
                            <Text title = "City"/>
                           <Button style = {{ marginTop:'20px'}} color="danger">Submit</Button>
                        </div>
                    </Col>
                ]
                </Row>
            </Container>
        </div>

  

)


export default Body;


