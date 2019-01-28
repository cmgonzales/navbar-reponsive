import React, { Component } from 'react';
import Toolbar from './Toolbar/Toolbar'
import './App.css';
import SideDrawer from '../src/SideDrawer/SideDrawer'
import BackDrop from '../src/Backdrop/Backdrop'
import Body from './Components/Body'

class App extends Component {
  state = {
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
 this.setState((prevState) =>{
   return{sideDrawerOpen: !prevState.sideDrawerOpen}

 })

  };

  render() {
    let sideDrawer;
    let backdrop;

    if(this.state.sideDrawerOpen){
      sideDrawer = <SideDrawer/>
      backdrop = <BackDrop/>
    }
    return (
      <div style = {{height: '100%'}}>
        <Toolbar
         drawerClickHandler = {this.drawerToggleClickHandler} 
        />
    
        {sideDrawer}
        {backdrop}
              
        <Body/>
        
      </div>
    );
  }
}

export default App;

