import React from 'react'
import './works.css'
import PropTypes from 'prop-type'

const Works = props =>(
 <div>
   <h1 className = "numbers"> {props.number} </h1>
     <p>{props.intro}</p>
     <p>{props.info}</p>
</div>
)

export default Works

Works.propType = {
  intro: PropTypes.string,
  info: PropTypes.string
}