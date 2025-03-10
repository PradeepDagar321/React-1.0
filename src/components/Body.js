import RestaurantCard from "./RestaurantCard";
//import resList from "../utils/swiggyAPIdata";
import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


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
    const [filteredRestaurant, setfilteredRestaurant] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        //try {   corsproxy =https://corsproxy.io/?
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.2231589&lng=75.7670466&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
            const json = await data.json();
            setresRating(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)||[];
            setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)||[];
        //} catch(error) {
        //    setresRating([]);
        //}   
    };
     
    console.log(resRating);

    // we will create another usestate variable to link my input value from user
    const [searchText, setsearchText] = useState("");


    // if (resRating.length == 0) {
    //     return <Shimmer />;
    // } instead we use ternary operator

    return filteredRestaurant.length == 0? <Shimmer /> :
        (
            <div className="body">
           
            

                <div className="filter">

                    <div className="search">
                        <input type="text" className="search-box"
                            value={searchText} onChange={(e) => { setsearchText(e.target.value) }} />
                        
                        <button onClick={() => {
                            const filteredList = resRating.filter(
                                (res) => res?.info.name.toLowerCase().includes(searchText.toLowerCase())
                            )
                                setfilteredRestaurant(filteredList);                             
                        }}>
                            Search
                        </button>
                    </div>
                
                <button className="filter-btn" onClick={() => {
                        //let filteredRes = resList.filter( initially when i have data in swiggyApidata.js
                        console.log(searchText);
                    let filteredRes = resRating.filter(
                        (res)=>res.info.avgRating>4.2
                    );
                        setfilteredRestaurant(filteredRes);

                }}>
                    Top Rated Restaurant
                </button>
                </div>
                <div className="res-container">
                {
                    filteredRestaurant.map((restaurant )=> (<RestaurantCard key={restaurant?.info.id} resData={restaurant} />))
                
                }
                
                </div>

            </div>
    );
};

export default Body ;