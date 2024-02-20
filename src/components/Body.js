import RestCard,{PromotedLabel} from './Res';
import MindMenu from './menu';
import { Shimmer } from './shimmer';
import { useState,useEffect,useContext } from 'react';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';
//{name,cuisine,rating,Eta} and use it like name , cuisine etc 
import useOnlineStatus from '../utils/useOnlineStatus';
import mainData from '../utils/mainData';
import UserContext from '../utils/UserContext';

const Body=()=>{
const [searchData,setSearchData]=useState("")
//const [filterMList,setFilteredMList]=useState([])
//const {ExploreData,CuisineData,CityData,TList,filteredList,listOfRestraunant,MainMenuData}=mainData()
const [mainList,setMainList]=useState()
//setMainList(MainMenuData)
//console.log(mainList)



const [listOfRestraunant,setListOfRestraunant]=useState([]);
const [filteredList,setFilteredList]=useState([])
const [TList,setTList]=useState([])
const [CityData,setCityData]=useState([])
const [CuisineData,setCuisineData]=useState([])
const [ExploreData,setExploreData]=useState([])
const [MainMenuData,setMainMenudata]=useState([])



useEffect(()=>{
    const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.495686&lng=73.952336&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
       
        
        const json=await data.json();
         
        //console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
        const listdata=json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
        setListOfRestraunant(listdata)
        const listdata1=json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        //console.log(listdata1)
        setFilteredList(listdata1)
        
      
        // const toplist=json.data.cards[1].card.card.imageGridCards.info
        const toplist =json.data.cards[0].card.card.imageGridCards?.info
        setTList(toplist)
        // console.log(json) 
        // console.log(toplist)
        const cityData=json.data.cards[7].card.card.brands
        setCityData(cityData)
        const cuisine=json.data.cards[7].card.card.brands
        setCuisineData(cuisine)
        const explore=json.data.cards[8].card.card.brands
        setExploreData(explore)
        const m=json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
        setMainMenudata(m)
        //console.log(m)
        
    
    }


    fetchData()
    
},[])


const restCardPromoted= PromotedLabel(RestCard)

let filterDData=(list)=>{
         list=list.filter(r=>(
            r.info.sla.deliveryTime<25
             ))
            // setListOfRestraunant(list)
            //setFilteredMList(list)
            //setMainList(list)
            setMainMenudata(list)
}

let filterData=(list)=>{
//filter logic or sorting algo


list=list.filter(r=>(
r.info.avgRating>4
 ))
 
//console.log(list)
//setMainList(list)
setMainMenudata(list)

}
let filterSearch=(text,list)=>{
    //console.log(text.toLowerCase().trim())
    // text=text.toLowerCase().trim()
const  filterlist=   list.filter(val=>
   
val.info.name.toLowerCase().includes(text.toLowerCase())
    )
    
    //setFilteredMList(filterMList)
    //setMainList(filterlist)
    setMainMenudata(filterlist)
   
}
//conditional rendering

const onlineStatus=useOnlineStatus();
const {setUserInfo,loggedInUser}=useContext(UserContext)
    if(!onlineStatus){
    mainList.length===0? setMainList(MainMenuData): setMainList(mainList)
        
        return(
            <div>
                <h1>
                    plz chk your internet connection
                </h1>
            </div>
        )
    }

    // if(listOfRestraunant.length===0){
    //     return(
    //         <Shimmer/>
    //     )
    // }
    return (!listOfRestraunant)?<Shimmer/>
    :
    
    (
        <div className='body'>
            <div className='flex justify-between'>
            <div className='mr-4 p-4 search'> 
           
                <input 
                data-testid="searchInput"
                className="bg-sky-200 border-black border-solid cursor-pointer h-12 hover:bg-sky-400 px-5 py-2 rounded-xl text-center text-white transition-colors w-72"
                placeholder='enter restaurant name here'
              
                onChange={(e)=>{setSearchData(e.target.value) ,console.log(searchData)}}
                value={searchData}
                >

                </input>
                <button className='bg-green-100 h-30 hover:bg-sky-400 ml-5 px-5 py-2 ring-1 ring-inset ring-p rounded-xl text-pink-700' 
                onClick={()=>{filterSearch(searchData,mainList)
                }}
                >
                    Search
                </button>

                <label>username:</label>
                <input className="bg-sky-200 border-black border-solid cursor-pointer h-12 hover:bg-sky-400 px-5 py-2 rounded-xl text-center text-white transition-colors w-72"
                placeholder='enter your name here'
              
                onChange={(e)=>{setUserInfo(e.target.value)}}
                value={loggedInUser}
                >

                </input>
                <button className='bg-green-100 h-30 hover:bg-sky-400 ml-5 px-5 py-2 ring-1 ring-inset ring-p rounded-xl text-pink-700' 
                onClick={()=>{filterSearch(searchData,listOfRestraunant)
                }}
                >
                    User
                </button>
            </div>
            <div className='filter'>
                <button className='bg-green-100 h-30 hover:bg-sky-400 ml-5 mt-4 px-5 py-2 ring-1 ring-inset ring-p rounded-xl text-pink-700' 
                onClick={()=>{filterData(mainList)}}
                onMouseOver={()=>{
                    
                }}
                >
                    Top Rated Restaurants </button>
           
            <button className='bg-green-100 h-30 hover:bg-sky-400 ml-5 px-5 py-2 ring-1 ring-inset ring-p rounded-xl text-pink-700' 
                onClick={()=>{filterDData(mainList)}}
                onMouseOver={()=>{
                    
                }}
                >
                    Early Delivery Restaurants </button>
                    </div>
                    </div>
            {/* <div className='h-1/3 p-4 text-left w-full'><b>Best offers for you</b>
       
            <div className='flex' >
            {
            
                TList.map(v=>(
                    
                    <MindMenu menuData={v} key={v.id} />
                ))
            }
            </div>
          </div> 
          */}
          <div className='p-4 text-left'><b>What's On Your Mind</b>
            {/* animate-bounce */}
            <div className='flex w-full' >
            {
            
              listOfRestraunant.map(v=>(
                    
                    <MindMenu menuData={v} key={v.id} />
                ))
            }
            </div>
          </div>
            <div className='font-bold font-lg font-xl ml-5 text-xl'>
                <b>Top Restraurants chain in your loaction</b></div>
            <div className='... flex flex-wrap justify-evenly truncate'>
                
              {filteredList.map(d=>(
                
               
                <Link to={"/restaurants/"+d.info.id} key={d.info.id} >
                    
                <RestCard resData={d?.info}  />
                </Link>
              ))} 
              </div>
            
            <div>
            <div className='font-bold font-xl m-2 ml-5 text-xl'>
                <b>Top Restraurants In Your Area For Online Delivery</b></div>
            <div className='flex flex-wrap justify-evenly'>
                
              {MainMenuData.map(d=>(
                
               
                <Link to={"/restaurants/"+d.info.id} key={d.info.id} >
                    {/* <PromotedLabel resData={d?.info}/> */}
                    <RestCard resData={d?.info}/>
                {/* {
                d?.info?.isOpen===false ?
            <PromotedLabel resData={d?.info}/> 
            :   
            <RestCard resData={d?.info}  />
                
                } */}
                </Link>
              ))} 
              </div>
              
            </div>
            <div>     
                <Footer data={CityData} cuisine={CuisineData} explore={ExploreData}/>
            </div>
        </div>
    )
}
export default Body