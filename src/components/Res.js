import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestCard=(props)=>{
    // const {name,cuisine,rating,Eta,resData}=props;
  
    const {resData}=props;
    //console.log(resData)
    const {loggedInUser} =useContext(UserContext)
    // const data=resData.info
    const {name,cuisines,avgRating,costForTwo,sla,cloudinaryImageId}=resData
    const time= resData.sla.deliveryTime
    // console.log(resData.sla.deliveryTime)
    
    return(
        <div data-testid="res-card" className='border-2 border-teal-400 hover:shadow-teal-200/40 justify-center m-2 mb-2 p-2 pb-2 rounded-xl shadow-lg w-[200px]' style={{backgroundColor:"#80c0c0"}}>

{resData.isOpen?<label
    className="absolute bg-black m-2 p-2 rounded-lg text-white"
    >Open</label>:
    <h1></h1>}
            <img className="border h-32 rounded-lg w-56"
             src={CDN_URL+cloudinaryImageId}
              >
                </img>
            <h2 className="... font-bold py-2 text-lg truncate">{name}</h2>
             <h5 className="... truncate">{ cuisines.join(' , ')}</h5> {/* */}
            <div className="flex items-stretch">
            <h5 className="mr-2">🌟{avgRating} stars</h5>
            <h5>{time +" minutes"}</h5>
            </div>
            <h5>{costForTwo}</h5>

        </div>
    )
 }

 export const PromotedLabel=(RestCard)=>{



    return(props)=>{
        return(
        <div>
    <label
    className="absolute bg-black m-20 p-20 rounded-lg text-white"
    >Open</label>
    <RestCard {...props}/>
</div>
        )
    }
       
}

 export default RestCard