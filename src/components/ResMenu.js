import React, { useEffect, useState } from 'react';
import { Shimmer } from './shimmer';
//import Error from './Error';
import { MenuAPI_URL } from '../utils/constants';
import { useParams } from 'react-router-dom';
import Switch from "react-switch";
import useResMenu from '../utils/useResMenu';
import ResCategory from './resCategory';

const ResMenu = () => {
  const { resId } = useParams();
const [veg,setVeg]=useState(false)
const [showindex,setShowindex]=useState(null)
    
  const { resInfo, details, MenuData, pickData, offerData, vegData } = useResMenu(resId);
//console.log(resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards  )
  
emptyCart=()=>{

}
let handleVeg=(veg)=>{
  veg?setVeg(false):setVeg(true)
}

  if (resInfo === null) return <Shimmer />;


 // const category=resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(c=>c?.card?.["card"]?.["@type"]==="type."
const category=resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(c=>c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
//console.log(category)  
return  (

    <div className="text-center">
      <div className="flex justify-around">
        <div className="">
          <h1 className='font-bold m-4 my-6 text-xl' >{details.name}</h1>
          <h5 className='font-bold text-m' >{details.areaName}  {details.city}</h5>
        </div>
        <div className="border-2 border-teal-600 mt-5 rounded-lg">
          <h5>{details.avgRating}⭐</h5>
          <h5 className='text-teal-800'>{details.totalRatingsString}</h5>
        </div>
      </div>
      <hr />
      <div className="text-center">
        <h5>
          {details.costForTwoMessage}</h5>
      </div>
      <div className="text-center">
        <div className="flex flex-wrap justify-center">
          {offerData.map((a) => (
            <div className="border-2 border-teal-600 m-2 p-2 rounded-2xl" key={a.info.couponCode}>
              <h6 className='font-bold'>{a.info.header}</h6>
              <h6>{a.info.couponCode}</h6>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center">
        <div>
        <Switch 
        onChange={()=>{handleVeg(veg)}} checked={veg}
        />
{/* <Switch
  checked={veg}
  onChange={handleVeg}
 
  inputProps={{ 'aria-label': 'controlled' }}
/> */}
        </div>
       
      </div>
      <div>
        <button onClick={()=>emptyCart()}>empty the cart</button>
      </div>
            <div className='ite items-center ml-6/5 mx-auto'>
              {category.map((c,index)=>(
                
                  <ResCategory   key={c?.card?.card?.title} data={c?.card?.card}  
                  showItems={index===showindex ? true:false} 
                  setShowindex={()=>{setShowindex(index)}}
                  />
                  
              ))}
            </div>
          

      
        
     
    </div>
 );
        }


export default ResMenu;
