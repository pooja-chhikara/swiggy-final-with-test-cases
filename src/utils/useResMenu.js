import { useState, useEffect } from "react";
import { MenuAPI_URL } from "./constants";

const useResMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [MenuData, setMenuData] = useState([]);
  const [details, setDetails] = useState([]);
  const [offerData, setOfferData] = useState([]);
  const [vegData, setVegData] = useState([]);
  const [pickData, setPickData] = useState([]);

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
     
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.495686&lng=73.952336&restaurantId=${resId}&catalog_qa=undefined`);
        const json = await data.json();

        const resData = json.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
        const detail = json?.data?.cards[0]?.card?.card?.info;
        const offer = json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers;
        const veg = json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.card?.card?.vegOnlyDetails?.description;
        const pick = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

        setDetails(detail);
        setMenuData(resData);
        setOfferData(offer);
        setVegData(veg);
        setPickData(pick);
        setResInfo(json);
    
    };

    fetchData();
  }, [resId]);

  return { resInfo, details, MenuData, pickData, offerData, vegData };
};

export default useResMenu;
