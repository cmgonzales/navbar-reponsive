import React from 'react'
import DrawerToggleButton from  '../SideDrawer/DrawerToggleButton'
import './Toolbar.css'


const toolbar = props => (

<header className = "toolbar">
    <nav className = "toolbar_navigation">
        <div className = "toolbar_toggle-button">
            <DrawerToggleButton
             click = {props.drawerClickHandler} />
        </div>
        <div className = "toolbar_logo"><a href = "/">THE LOGO</a></div>
        <div className = "spacer"></div>
        <div className = "toolbar_navigation-items"> 
            <ul>
               <li ><a href = "/">This is test</a></li> 
               <li ><a href = "/">This is test</a></li> 
            </ul>
        </div>
        
    </nav>
</header>

)

export default toolbar