import City  from "./City"
import { Cuisines } from "./Cuisines"
import { Restaurant } from "./RestrauantL"
//import { CityList } from "../utils/cityData"
export const Footer=(props)=>{
    const CityList=props?.data
    const CuisineList=props?.cuisine
    const ExploreList=props?.explore
   // console.log(props)
    return(
        
        <div className="footer">
            <div className="m-1">
            
            <h3 className="font-bold font-lg m-5">
                Best Places To eat Across Cities
            </h3>
            <div className="flex flex-wrap justify-start m-2">
       { CityList.map((c,index)=>(
       //console.log(c.text);
       
        <City cityData={c} key={index} />
       )) 
       }
   
    
   
            </div>
           
        </div>
        <div className="font-bold font-lg m-5">
            
            <h3>
                Best Cuisine near Me
            </h3>
            </div>
            <div>
            <div className="flex flex-wrap justify-start m-2">
            { CuisineList.map((c,index)=>(
       //console.log(c.text);
       
        <City cityData={c}  key={index}/>
       )) }
        </div>
        </div>
        <div className="font-bold font-lg m-5">
            
            <h3>
                Explore Every Restraurant Near Me
            </h3>
           </div>
           <div>
            <div className="flex flex-wrap justify-start m-2">
       { ExploreList.map((c,index)=>(
       //console.log(c.text);
       
        <City cityData={c} key={index} />
       )) }
   
    
   
            </div>
        </div>
        </div>
    )
}