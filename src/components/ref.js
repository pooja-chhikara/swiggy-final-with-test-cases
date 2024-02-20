
import { useState,useEffect } from 'react'
import { Shimmer } from './shimmer'
import Error from './Error'
import { MenuAPI_URL } from '../utils/constants'
import { useParams } from 'react-router-dom'
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { Switch } from '@syncfusion/ej2-buttons';
import useResMenu from '../utils/useResMenu'


const ResMenu = () => {

 const {resId} =useParams();
 const {resInfo,details,MenuData,pickdata,offerData,vegData}= useResMenu(resId);

console.log(resInfo)


useEffect(()=>{
   //console.log(resInfo) 
   
   
//fetchMenu()
},[])

const fetchMenu= async()=>{
  const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.495686&lng=73.952336&restaurantId="+resId+"&catalog_qa=undefined")
   const resInfo= await data.json()
   //console.log(resInfo)
    //const json=await data.json()
   // console.log(resInfo.data.cards)
   
}
if (resInfo===null)
 return (<Shimmer/>)

else return (
    
<div className='r-menu'>
    <div className='ist-row'>
    <div className='ist-col'>
        <h1>{details.name}</h1>
     
        {/* <h5>{details.cuisines.join(" , ")}</h5> */}
        <h5>{details.areaName}</h5>
        </div>
        <div className='second-col'>
        <h5>{details.avgRating}⭐</h5>
        <h5>{details.totalRatingsString}</h5>

        </div>
        </div>
        <hr />
        <div className='second-row'>
        {/* <h5>🕘 {details.sla.deliveryTime} mins</h5> */}
        <h5>{details.costForTwoMessage}</h5>

        </div>
        <div className='third-row'>
        <div className='offer-block'>
           { offerData.map(a=>(
            <div className='item'>
            <h6>{a.info.header}</h6>
             <h6>{a.info.couponCode}</h6>
            </div>
            ))}
            
        </div>
        </div>
        <div className='forth-row'>
<h4>{vegData}</h4>

        </div>
        <div className='fifth-row'>
            <h1>Top Picks</h1>
            <div className='top-pick'>
            {
                pickdata===undefined?<Error/>
                : pickdata.map(a=>(
                    <div className='pick-card'>
                        <h3>{a.card.info.name}</h3>
                        <h4>{a.card.info.description}</h4>
                        <h6>₹{a.card.info.price/100}</h6>
                    </div>
                ))
            }
            </div>
</div>
<h3>recommended(20)</h3>
<div className='six-row'>
{MenuData.map(a=>(
    <div className='food-item'>
       <p> {a.card.info.isVeg?"🟢":"🔴"}</p>



        <p> {a.card.info.name}</p>
        <p>₹{a.card.info.price/100}</p>
        <p>{a.card.info.description}</p>
        </div>
))

}


</div>
        
       

    </div>
  )
}

export default ResMenu