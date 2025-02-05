import React from 'react'

const PropsChildrenEx = (props) => {
  console.log(props);
  return (
    <div>PropChildrenEx
    <hr/>
    <h1>{props.username}</h1>
    <h1>{props.company}</h1>
    {
        props.chilren[1]
    }
      
    </div>
  )
}

export default PropsChildrenEx
