import React from 'react'
import './DrawerToggleButton.css'

const drawerToggleButton = props => (

    <button className = "toggle-button" Onclick ={props.click}>
        <div className = "toggle-button_line"></div>
        <div className = "toggle-button_line"></div>
        <div className = "toggle-button_line"></div>
    </button>
)

export default drawerToggleButton