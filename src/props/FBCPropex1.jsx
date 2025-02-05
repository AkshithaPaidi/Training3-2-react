import React from 'react'

const FBCPropex1 = (props) => {
    console.log(props);
    if(props.isLoggedIn== true){
  return (
    <div>
      FBCPropex1
      <h1>Welcome{props.username}</h1>
      {
        props.hobbies.map((value)=>{
            return<li>{value}</li>
        })
      }
    </div>
  )
}
}

export default FBCPropex1;
