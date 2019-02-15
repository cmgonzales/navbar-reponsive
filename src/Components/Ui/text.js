import React, {Component} from 'react'
import './text.css'

class Text extends Component {
constructor(props){
    super(props)

    this.state = {
        input: ['First Name', 'Phone', 'Email', 'City']
    }
}

    render(){
        return(
    <div className = 'text'>
      {this.state.input.map(inputs => (
          <label>
       <h1 className = "inputs">{inputs}</h1> 
      <input className = 'input' ></input>
        </label>
       ))}
    </div>

    )
}

}

export default Text 