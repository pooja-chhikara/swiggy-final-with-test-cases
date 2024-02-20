import { useState, useEffect } from "react";


const mainData=()=> {
    

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

    
    return {ExploreData,CuisineData,CityData,TList,filteredList,listOfRestraunant,MainMenuData}
}
export default mainData