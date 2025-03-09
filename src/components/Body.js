import RestaurantCard from "./RestaurantCard";
//import resList from "../utils/swiggyAPIdata";
import React, { useState, useEffect } from "react";


//we have multiple resaurant card so for that i am using a different component for this
//   ?. 
// If resData is undefined or null, resData?.info?.name won't throw an error. Instead, it returns undefined.
//Handles Missing or Delayed Data


//


//<RestaurantCard resData={resList[2]}
 //now instead of writing like this i will use js element
//resName="Patwari Vaishno Dhaba"
//cusine="Chaat, Snacks, Chinese"   />

//if new element come in reslist so we will loop over resList using array Map() function


const Body = () => {
    // initially we saved data in swiggyapidata now we are fetching data directly from swiggy by useEffect
    //const [resRating, setresRating] = useState(resList);
    const [resRating, setresRating] = useState([]);//now this resRating means List of restaurant intitially 0;

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.2231589&lng=75.7670466&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
        const json = await data.json();
        setresRating(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };


    if (resRating.length == 0) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="body">
            <div className="search">search</div>
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    //let filteredRes = resList.filter( initially when i have data in swiggyApidata.js
                    let filteredRes = resRating.filter(
                        (res)=>res.info.avgRating>4.5
                    );
                setresRating(filteredRes)

                }}>
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
                {
                    resRating.map((restaurant )=> (<RestaurantCard key={restaurant?.info.id} resData={restaurant} />))
                
                }
                
            </div>

        </div>
    );
};

export default Body ;