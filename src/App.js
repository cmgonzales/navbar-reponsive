import React, { Component } from 'react';
import Toolbar from './Toolbar/Toolbar'
import './App.css';
import SideDrawer from '../src/SideDrawer/SideDrawer'
import BackDrop from '../src/Backdrop/Backdrop'
import Body from './Components/Body'
import Middle from  './Components/middle'

class App extends Component {
  state = {
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
 this.setState((prevState) =>{
   return{sideDrawerOpen: !prevState.sideDrawerOpen}

 })

};
 //closing the modal

 backdropClickHandler = () => {
   this.setState({sideDrawerOpen: false})
   
 }

 

  render() {
  
    let backdrop;

    if(this.state.sideDrawerOpen){
      backdrop = <BackDrop click = {this.backdropClickHandler}/>
    }
    return (
      <div style = {{height: '100%'}}>
        <Toolbar
         drawerClickHandler = {this.drawerToggleClickHandler} 
        />
        <SideDrawer show = {this.state.sideDrawerOpen}/>
        {backdrop}
              
        <Body/>
        <Middle/>
      </div>
    );
  }
}

export default App;

