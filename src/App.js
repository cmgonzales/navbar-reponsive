import React, { Component } from 'react';
import Toolbar from './Toolbar/Toolbar'
import './App.css';
import SideDrawer from '../src/SideDrawer/SideDrawer'
import BackDrop from '../src/Backdrop/Backdrop'

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
        <main style =  {{marginTop: '64px'}}>
        <p>This is the page content</p>
        </main>
      </div>
    );
  }
}

export default App;
