
import React, { Component } from 'react'

export default class UserClass extends Component {
 constructor(props){
    super(props)
this.state={
    count:0,
    userData:{}
}


 }

fetchData=async()=>{
    const data=await fetch("https://api.github.com/users/pooja-chhikara")
    let d=await data.json()
   // console.log(d)
    this.setState({
        userData:d
    })
}

 componentDidMount(){
    this.state.count++;
    //console.log(this.props)
    this.fetchData()
    
    this.setState({
        count:this.props.name
    })
   // console.log(this.state.userData)
 }
componentDidUpdate(prevProps,prevState){
//     console.log(this.props+" props")
// console.log("prev "+ prevProps+" "+prevState)
}
    render() {
        const {name,location,detail}=this.props
        const {userData}=this.state
        //debugger;        
        return (
        <div className="user-card">
            <button onClick={()=>{ 
                //this.state.count++
                console.log(this.state.count)
                this.setState({
        count:this.props.location
    })
    console.log(this.state.count)
    }}
    >click here for count</button>
    <h2>{this.state.count}</h2>
    <img src={userData.avatar_url} width={100} height={100}></img>
        <h2>name:{userData.name}</h2>
        <h3>Location: {userData.location}</h3>
        <h4>Contact:{userData.url}</h4>
        </div>
    )
  }
}
