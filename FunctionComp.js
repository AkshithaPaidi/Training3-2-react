import React from 'react'
import './myStyles.css'

export default function functionComp() {
    console.log(props);
    let className= props.apply ?'heading':'';
    let inline={
      color: 'Red',
      fontSize: '200px',
      
    }
  return (
    <div>
        <h1 style={inline}>Welcome to MRU {props.city},{props.state},{props.children}</h1>
    </div>
     
    
  )
}
