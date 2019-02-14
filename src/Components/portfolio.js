import React, { Component } from 'react'
import one from '../img/flower1.jpeg'
import two from '../img/flower2.jpeg'
import three from '../img/flower3.jpg'
import './porfolio.css'

class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flower: [one, two, three]
        }
    }
    render() {

        return (
            <div className="image">
                {this.state.flower.map(flowers => (
                    <img className='img' src={flowers} Alt='flowers' />
                ))}
            </div>
        )
    }
}
export default Portfolio