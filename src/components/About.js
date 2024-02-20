import User from "./User"
import { Component } from "react"
import UserClass from "./UserClass"
import UserContext from "../utils/UserContext"
class  About extends Component {
  constructor(){
    super()
   // console.log(UserContext)
  }
  render(){
  return (
    <div>About
        <h3>namaste about me page </h3>
        <User name="pooja" location="Somnath" detail="@pooja.chhikara"/>
        <UserContext.Consumer>{({loggedInUser})=>
     <h1>{loggedInUser}</h1>
      
        }</UserContext.Consumer>
        <UserClass name="pooja Chhikara" location="Somnath" detail="@pooja.chhikara"/>
        <div>
          <h1>

          </h1>
        </div>
    </div>
  )
}
}

export default About