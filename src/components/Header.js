import { LOGO_URL } from "../utils/constants"
import { useEffect, useState,useContext } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux"
const Header=()=>{
const [btnName,setBtnName]=useState("Login")


//selector is a hook

//subscribing to the store using this selector
 const cartItems=useSelector((store)=>store.cart.items)
//const cartItems=[]
useEffect(()=>{
   // console.log("header")
},[btnName])

//console.log(cartItems)
const onlineStatus=useOnlineStatus();

const {loggedInUser}=useContext(UserContext);

    return (
        <div className="bg-pink-100 flex justify-between shadow-md">
    <div className=''>
    
        <img className="border-2 border-teal-400 h-20 m-2 rounded-3xl shadow-lg" 
        src={LOGO_URL}
        />
    
    </div>
    <div className='flex items-center'>
    <ul className='flex m-4 p-4' >
        <li className="px-4"><Link to="/">Home</Link></li>
        <li className="px-4"> <Link to="/about">About Us</Link></li>
        <li className="px-4"> <Link to="/contact">Contact Us</Link></li>
        <li className="px-4"> <Link to="/Grocery">Grocery</Link></li>
       <b> <li className="font-features px-4 sups"> 
       {/*  */}
       <Link data-testid="Shopping" id="cart" to="/Cart">
       🛒{cartItems.length}
       </Link>
       </li></b>
       {/* {console.log(btnName)} */}
       <li className="animate-ping px-4">{onlineStatus?"🟢":"🔴"}</li>
        <button className="font-medium inline-flex items-center px-2 py-1 ring-1 ring-inset ring-p rounded-md text-pink-700 text-xsi"
        
        onClick={()=>{
            btnName==="Login"?
            setBtnName("Logout"):
            setBtnName("Login");}}> {btnName}</button>
       <li className="font font-bold mx-3">{loggedInUser}</li>
    </ul>
   
    </div>
    
        </div>
    )
    }
    export default Header