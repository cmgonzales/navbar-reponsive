import React from 'react'
import './body.css'
import Text from './Ui/text'
import { Button } from 'reactstrap'
import Background from  '../img/nature1.jpeg'


const img = {
    height: `100vh`,
    width: '100%',
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex'
}

const input = {
    display: 'flex',
    flexDirection: 'column'
}

const Body = props => (

        <div style  = {img}>
        
<div>
                        <h1 style = {{color: "white"}}>THE<br /> PERFECT TOUCH</h1>
                        <h4 className = "headinginfo">Custom floral arragemewnt tailored to your <br/> style and space. Starting at $75 per delivery.</h4>
                        <h4 className = "headinginfo">Schedule a complimentary design consultation today.</h4>
               
</div>            
<div style =  {input}>
                   <Text/>
                   <Button color="danger">Submit</Button>
</div>               
            
        </div>

  

)


export default Body;


