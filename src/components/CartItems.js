import { useDispatch } from "react-redux"
import { CDN_URL } from "../utils/constants"
import {addItem, removeItem} from "../utils/cartSlice"

const CartItems = ({item} )=> {
//  console.log(item)

//Dispatch is a function useDispatch is a hook
const dispatch=useDispatch()
const handleAddItem=(item)=>{
    //dispatch an action
    
 dispatch(addItem(item.card.info))
// it will add payload as an object with value and add in cartslice
}
const handleRemoveItem=(item)=>{
    //dispatch an action
    
 //dispatch(removeItem(item.card.info))
// it will add payload as an object with value and add in cartslice
}

    return (
    <div>
       
    
    {
        item.map((d)=>(
            // {console.log(d.card.info.name)}
<div className="border-b-2 border-lg border-teal-600 flex justify-between m-4 p-2 rounded text-left text-sm"
     key={d.card.info.id}>

       
     <div className="w-9/12">  
    <div className="font-bold p-2 text-md">
        <span>{d.card.info.name}</span>
        <span> - ₹{
        d.card.info.price?
        d.card.info.price/100
    :d.card.info.defaultPrice/100}</span>
            
    </div>

    <p className="text-xs">{d.card.info.description}</p>
</div>
    <div className="relative w-3/12"> 
    <div className="absolute right-0 top-0">
    <button className="bg-black p-1 rounded-lg shadow-lg text-white"
    
    onClick={()=>handleAddItem(d)}
    >Add+</button>
     <button className="bg-black p-1 rounded-lg shadow-lg text-white"
    
    onClick={()=>handleRemoveItem(d)}
    >remove-</button>
        </div>
            <img src={CDN_URL+d.card.info.imageId} className="w-full"></img>
            
        </div>
</div>
        ))
    }
   
        
        </div>
  
  )
}



export default CartItems