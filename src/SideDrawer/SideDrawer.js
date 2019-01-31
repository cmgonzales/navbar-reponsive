import React from 'react'
import './SideDrawer.css'


const sideDrawer = props => {

//adding animation
    let drawerClasses= ['side-drawer']
    if(props.show){
        drawerClasses = ['side-drawer', 'open'];
    }
  return (
    <nav className= {drawerClasses.join(" ")}>
        <ul>
            <li ><a href="/">This is test</a></li>
            <li ><a href="/">This is test</a></li>
        </ul>
    </nav>
  );
}

export default sideDrawer;