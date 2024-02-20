import { useEffect, useState } from "react"


const  User=({name,location,detail})=> {
    let [count,setCount]=useState(0)
    useEffect(()=>{
        count=count+1
        //console.log(count)
    },[])
   // console.log(count)
  return (
    
    <div className="user-card">
        <h1>{++count}</h1>
        <h2>name:{name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact:{detail}</h4>
    </div>
  )
}

export default User