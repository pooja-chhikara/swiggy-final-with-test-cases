import { useDispatch, useSelector } from "react-redux"
import ItemListCat from "./ItemListCat"
import CartItems from "./CartItems"
import { clearCart } from "../utils/cartSlice"

const  Cart =()=>{
const cartItemsList=useSelector((store)=>store.cart.items)
console.log(cartItemsList)

const dispatch=useDispatch()

emptyCart=()=>{
dispatch(clearCart())

}
  return (
    <div  className="m-5 p-5 text-center">
        <h1 className="font-bold text-2xl"> Cart </h1>
        <div>
        <button
        className="bg-black m-2 p-2 rounded-lg text-white"
        onClick={()=>emptyCart()}>Clear Cart</button>
      </div>
       <div>
        
       </div>
       {cartItemsList.length===0 &&(<h1>your cart is empty plz add items to your cart</h1>)}
        <CartItems item={cartItemsList}></CartItems>
        </div>
  )
}
export default Cart