import React, { Component } from 'react'
import one from '../img/flower1.jpeg'
import two from '../img/flower2.jpeg'
import three from '../img/flower3.jpg'
import './porfolio.css'
import { Container, Row, Col } from 'reactstrap'

class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flower: [one, two, three]
        }
    }
    render() {
        const { flower } = this.state
        return (
            <div className="image">
                <Container fluid>
                    <Row>
                        {flower.map(flowers =>
                            <Col md='2'>
                                <img className='img' src={flowers} Alt='flowers' />
                            </Col>
                        )}
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Portfolio