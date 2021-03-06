import React, { Component } from 'react'
import './text.css'

class Text extends Component {
        state = {
            input: ['First Name', 'Phone', 'Email', 'City']
        
    } 
    render() {
        const { input } = this.state
        return (
            <div className='text'>
                {input.map(inputs => (
                    <label>
                        <h1 className="inputs">{inputs}</h1>
                        <input className='input' ></input>
                    </label>
                ))}
            </div>
        )
    }

}

export default Text 