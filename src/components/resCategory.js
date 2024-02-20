import ItemListCat from "./ItemListCat"
import { useState } from "react"
const ResCategory=({data,showItems,setShowindex})=>{
    //console.log(data)
    const handleClick=()=>{
        setShowindex()
            }
    return(
        
        <div className="bg-gray-50 mx-auto my-4 p-4 shadow-lg w-8/12">
            <div className="cursor-pointer flex justify-between"
            onClick={()=>handleClick()}
            >
            <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
            <span>⬇️</span>
        </div>
        
       {
        showItems  &&    <ItemListCat  item={data.itemCards} key={data.itemCards.id}/>
       }    

      
        </div>
    )
}
export default ResCategory