import React from 'react'
import './works.css'

const Works = props =>(
 <div>
   <h1 className = "numbers"> {props.number} </h1>
     <p>{props.intro}</p>
     <p>{props.info}</p>
</div>
)

export default Works