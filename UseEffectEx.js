import React, { useEffect, useState } from 'react'

const UseEffectEx = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = "MRU";
        setTimeout(()=>{
            setCount(1000);
        },4000)
    })

    const[users,setUsers]=useState([]);
    console.log(users);
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json().then(data=>{
        setUsers(data);
      }))
      .catch(err=>console.log(err))
    }, []);


  return (
    <div> UseEffectEx
      <h1>{count}</h1>
      {
        users.map((users,1)=>{
          return(
          <>
          <h1>{users.name}</h1>
          <h3>{users.email}</h3>
          </>
          <React.Fragment key={i}>
            <h1>{users.name}</h1>
            <h3>{users.email}</h3>
          </React.Fragment>
        })
      }
    </div>
  )
}

export default UseEffectEx
