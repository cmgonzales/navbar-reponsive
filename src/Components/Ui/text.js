import React from 'react'
import './text.css'

const Text = props => (

    <div >
   
        <h6 className = "label">{props.title}</h6>
        <input className = "text"></input>
    </div>

)

export default Text 