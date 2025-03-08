import React from "react";
import ReactDOM from "react-dom/client"; 

/**
 * Header
 * logo
 * nav Items
 * 
 * body
 * search
 * restaurants Container
 * restaurant Cards
 * 
 * Footer
 * copyright
 * links
 * address
 * contact
 * 
 * 
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://cdn.vectorstock.com/i/500p/85/91/food-delivery-logo-symbol-or-icon-template-vector-53658591.jpg"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>
        
    );
};

/**
 * 
 */

//for in line css i am creating this js object
const styleCard = {
    backgroundColor: "#f0f0f0"
}

//we have multiple resaurant card so for that i am using a different component for this
//   ?. 
// If resData is undefined or null, resData?.info?.name won't throw an error. Instead, it returns undefined.
//Handles Missing or Delayed Data
const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId,name,avgRating,costForTwo,sla,cuisines} = resData?.info;   //this is optional chaining instead of writing resdata?.info?.name we only use name
    return (
        <div className="res-card" style={styleCard} >
            <img
                className="res-logo1"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />
            <h4>{ name}</h4>         
            <h5>{ cuisines.join(",")}</h5>
            <h5>Rating:{avgRating}</h5>
            <h5>{costForTwo}   </h5>
            <h5>{sla?.slaString}</h5>
        </div>

    );
};

//

const resList = [
    {
        "info": {
            "id": "395763",
            "name": "Saini Veg Dhaba",
            "cloudinaryImageId": "j1gpleuypqjdpc3i1w76",
            "locality": "Hoshiarpur Road",
            "areaName": "Phagwara Central",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "North Indian"
            ],
            "avgRating": 4.1,
            "veg": true,
            "parentId": "254291",
            "avgRatingString": "4.1",
            "totalRatingsString": "4.2K+",
            "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 1,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-03-07 22:55:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                        "description": "bolt!"
                    },
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "bolt!",
                                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹79"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-85b04227-1d45-45dd-9ebd-632ec0f12395"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/phagwara/saini-veg-dhaba-hoshiarpur-road-phagwara-central-rest395763",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "214083",
            "name": "Big 7 Food Plaza",
            "cloudinaryImageId": "hmkfi1mryrmmgtw93beg",
            "locality": "Hargobind Nagar",
            "areaName": "Phagwara Central",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "North Indian",
                "Chinese",
                "Pizzas"
            ],
            "avgRating": 4.3,
            "parentId": "45424",
            "avgRatingString": "4.3",
            "totalRatingsString": "3.5K+",
            "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 1.3,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "1.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-03-07 22:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-85b04227-1d45-45dd-9ebd-632ec0f12395"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/phagwara/big-7-food-plaza-hargobind-nagar-phagwara-central-rest214083",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "476625",
            "name": "Get Together",
            "cloudinaryImageId": "k4utyk6mzlupvsa5tdda",
            "locality": "G T Road",
            "areaName": "Phagwara Law Gate",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Biryani"
            ],
            "avgRating": 4.1,
            "parentId": "87036",
            "avgRatingString": "4.1",
            "totalRatingsString": "2.5K+",
            "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 9.3,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "9.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-03-07 23:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
       
    },
    {
        "info": {
            "id": "550574",
            "name": "Hungry Point",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/16/d7732ec3-c7d6-4ac9-b944-2b4002a2fbbd_550574 (1).jpg",
            "locality": "Hargobind Nagar",
            "areaName": "Phagwara Central",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Italian",
                "Pizzas",
                "Burgers",
                "Beverages"
            ],
            "avgRating": 4.3,
            "veg": true,
            "parentId": "5290",
            "avgRatingString": "4.3",
            "totalRatingsString": "562",
            "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 1.5,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "1.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-03-07 22:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹89"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        }
        
    },
    {
        "info": {
            "id": "567246",
            "name": "Baba Chicken",
            "cloudinaryImageId": "uvhcgg7i2lkfrnmgtzsd",
            "locality": "Model Town",
            "areaName": "Phagwara Central",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Tandoor",
                "Punjabi"
            ],
            "avgRating": 4.3,
            "parentId": "5285",
            "avgRatingString": "4.3",
            "totalRatingsString": "496",
            "sla": {
                "deliveryTime": 18,
                "lastMileTravel": 1.6,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "1.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-03-07 23:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                        "description": "bolt!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "bolt!",
                                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-85b04227-1d45-45dd-9ebd-632ec0f12395"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/phagwara/baba-chicken-model-town-phagwara-central-rest567246",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "785441",
            "name": "Muscleholics",
            "cloudinaryImageId": "87d7877e4ca8634bcf01b01ca4445061",
            "locality": "Hargobind Nagar",
            "areaName": "Phagwara Central",
            "costForTwo": "₹100 for two",
            "cuisines": [
                "Salads",
                "Healthy Food"
            ],
            "avgRating": 4.7,
            "parentId": "142137",
            "avgRatingString": "4.7",
            "totalRatingsString": "250",
            "sla": {
                "deliveryTime": 16,
                "lastMileTravel": 1.8,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "1.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-03-07 22:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-85b04227-1d45-45dd-9ebd-632ec0f12395"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/phagwara/muscleholics-hargobind-nagar-phagwara-central-rest785441",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "524229",
            "name": "Shama Chicken Corner",
            "cloudinaryImageId": "mbdrjxyklv646hnsiirj",
            "locality": "Singla Market",
            "areaName": "Phagwara Central",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Biryani",
                "Hyderabadi",
                "Mughlai"
            ],
            "avgRating": 4.4,
            "parentId": "13769",
            "avgRatingString": "4.4",
            "totalRatingsString": "789",
            "sla": {
                "deliveryTime": 15,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "10-15 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-03-08 00:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                        "description": "OnlyOnSwiggy"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "OnlyOnSwiggy",
                                    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-85b04227-1d45-45dd-9ebd-632ec0f12395"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/phagwara/shama-chicken-corner-singla-market-phagwara-central-rest524229",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "769019",
            "name": "La Pino'z Pizza",
            "cloudinaryImageId": "f44bc9708c514cd2dd6ae0d8b4677214",
            "locality": "JALANDHAR",
            "areaName": "Eastwood",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Pizzas",
                "Pastas",
                "Italian",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4,
            "parentId": "4961",
            "avgRatingString": "4.0",
            "totalRatingsString": "461",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 9.9,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "9.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-03-07 23:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Pizza.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-85b04227-1d45-45dd-9ebd-632ec0f12395"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/phagwara/la-pinoz-pizza-jalandhar-eastwood-rest769019",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "739274",
            "name": "Tibet Kitchen",
            "cloudinaryImageId": "cf91af0ad62b20612678a67b324401b3",
            "locality": "Maheru",
            "areaName": "Phagwara Law Gate",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Chinese",
                "Momos",
                "Fast Food"
            ],
            "avgRating": 4.5,
            "parentId": "216061",
            "avgRatingString": "4.5",
            "totalRatingsString": "431",
            "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 10.6,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "10.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-03-07 22:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-85b04227-1d45-45dd-9ebd-632ec0f12395"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/phagwara/tibet-kitchen-maheru-phagwara-law-gate-rest739274",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "810014",
            "name": "The Belgian Waffle Co.",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/55a8eb4f-8ed6-4afc-baf8-23a35b7329f8_810014.JPG",
            "locality": "Phagwara",
            "areaName": "Eastwood",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Waffle",
                "Desserts",
                "Ice Cream"
            ],
            "avgRating": 4.7,
            "veg": true,
            "parentId": "2233",
            "avgRatingString": "4.7",
            "totalRatingsString": "143",
            "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 9.9,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "9.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-03-07 23:59:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png",
                        "description": "Delivery!"
                    },
                    {
                        "imageId": "Rxawards/_CATEGORY-Desserts.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-85b04227-1d45-45dd-9ebd-632ec0f12395"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/phagwara/the-belgian-waffle-co-eastwood-rest810014",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "590350",
            "name": "KFC",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/33fdc0d0-34b7-427d-882d-a41f98e0f45f_590350.JPG",
            "locality": "Phagwara Locality",
            "areaName": "Phagwara",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Fast Food",
                "Rolls & Wraps"
            ],
            "avgRating": 4.4,
            "parentId": "547",
            "avgRatingString": "4.4",
            "totalRatingsString": "934",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 9.8,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "9.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-03-08 00:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-85b04227-1d45-45dd-9ebd-632ec0f12395"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/phagwara/kfc-locality-phagwara-rest590350",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "787638",
            "name": "McDonald's",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/13662bbb-1a2a-4118-b419-0d81d092587f_787638.JPG",
            "locality": "Kapurthala",
            "areaName": "Khajurla",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "American",
                "Fast Food"
            ],
            "avgRating": 4.5,
            "parentId": "630",
            "avgRatingString": "4.5",
            "totalRatingsString": "463",
            "sla": {
                "deliveryTime": 35,
                "lastMileTravel": 10,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "10.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-03-08 00:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Burger.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹49"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-85b04227-1d45-45dd-9ebd-632ec0f12395"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/phagwara/mcdonalds-kapurthala-khajurla-rest787638",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "148987",
            "name": "Burger King",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/1/0aa1e963-ef96-4a83-b35f-caf93d19b2b7_148987.jpg",
            "locality": "G T Road",
            "areaName": "Phagwara",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Burgers",
                "American"
            ],
            "avgRating": 4.4,
            "parentId": "166",
            "avgRatingString": "4.4",
            "totalRatingsString": "3.3K+",
            "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 14.9,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "14.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-03-07 23:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-85b04227-1d45-45dd-9ebd-632ec0f12395"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/phagwara/burger-king-g-t-road-phagwara-rest148987",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "162926",
            "name": "Rinku & Vicky chicken roll corner",
            "cloudinaryImageId": "lstj2eyyh2qnq0o6wg80",
            "locality": "Prem nager",
            "areaName": "Hargobindnagar",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "rolls"
            ],
            "avgRating": 4.5,
            "parentId": "169635",
            "avgRatingString": "4.5",
            "totalRatingsString": "6.7K+",
            "sla": {
                "deliveryTime": 18,
                "lastMileTravel": 1.5,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "1.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-03-07 22:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "ABOVE ₹699",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-85b04227-1d45-45dd-9ebd-632ec0f12395"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/phagwara/rinku-and-vicky-chicken-roll-corner-prem-nager-hargobindnagar-rest162926",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "207405",
            "name": "Master Chef Fast Food",
            "cloudinaryImageId": "bzl9r76teclhpjdkse84",
            "locality": "Guru Hargobind Nagar",
            "areaName": "Phagwara Central",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Chinese",
                "Snacks"
            ],
            "avgRating": 4.2,
            "veg": true,
            "parentId": "133310",
            "avgRatingString": "4.2",
            "totalRatingsString": "708",
            "sla": {
                "deliveryTime": 13,
                "lastMileTravel": 1.5,
                "serviceability": "SERVICEABLE",
                "slaString": "10-15 mins",
                "lastMileTravelString": "1.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-03-07 23:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-85b04227-1d45-45dd-9ebd-632ec0f12395"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/phagwara/master-chef-fast-food-guru-hargobind-nagar-phagwara-central-rest207405",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "490968",
            "name": "Kwality Walls Ice Cream and More",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/d86aa020-faad-4863-820d-a2d759c7a7a3_490968.JPG",
            "locality": "Udham Singh Nagar",
            "areaName": "Phagwara Law Gate",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Desserts",
                "Ice Cream",
                "Ice Cream Cakes"
            ],
            "avgRating": 4.7,
            "veg": true,
            "parentId": "582",
            "avgRatingString": "4.7",
            "totalRatingsString": "481",
            "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 9.3,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "9.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-03-07 23:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹449",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-85b04227-1d45-45dd-9ebd-632ec0f12395"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/phagwara/kwality-walls-ice-cream-and-more-udham-singh-nagar-phagwara-law-gate-rest490968",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "474995",
            "name": "GCF The Chaap Hub",
            "cloudinaryImageId": "how1rebycziowrruz4xd",
            "locality": "Banga Road ",
            "areaName": "Phagwara Central",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Punjabi",
                "Tandoor"
            ],
            "avgRating": 4.2,
            "veg": true,
            "parentId": "86841",
            "avgRatingString": "4.2",
            "totalRatingsString": "448",
            "sla": {
                "deliveryTime": 16,
                "lastMileTravel": 1.9,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "1.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-03-07 22:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                        "description": "bolt!"
                    },
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "bolt!",
                                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-85b04227-1d45-45dd-9ebd-632ec0f12395"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/phagwara/gcf-the-chaap-hub-banga-road-phagwara-central-rest474995",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "207839",
            "name": "ASF (American Style Fried)",
            "cloudinaryImageId": "l3tbbqdj073ucuwioles",
            "locality": "Mandi Road",
            "areaName": "Phagwara Central",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "American",
                "Snacks",
                "Fast Food",
                "Beverages"
            ],
            "avgRating": 4.5,
            "parentId": "36699",
            "avgRatingString": "4.5",
            "totalRatingsString": "953",
            "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-03-07 22:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "UPTO ₹40"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-85b04227-1d45-45dd-9ebd-632ec0f12395"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/phagwara/asf-american-style-fried-mandi-road-phagwara-central-rest207839",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "168618",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/0387879c-126c-4bee-8f5e-5f8e5f3914d3_168618.jpg",
            "locality": "Guru Hargobind Nagar",
            "areaName": "Phagwara Central",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Pastas",
                "Desserts"
            ],
            "avgRating": 4.2,
            "parentId": "2456",
            "avgRatingString": "4.2",
            "totalRatingsString": "1.4K+",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 1.9,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-03-08 00:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹89"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-85b04227-1d45-45dd-9ebd-632ec0f12395"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/phagwara/dominos-pizza-guru-hargobind-nagar-phagwara-central-rest168618",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "159516",
            "name": "King Malai Champ",
            "cloudinaryImageId": "fv1uiq7uoe5r0dlkbt0l",
            "locality": "Post office Road",
            "areaName": "Phagwara Central",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "North Indian"
            ],
            "avgRating": 4.4,
            "parentId": "118367",
            "avgRatingString": "4.4",
            "totalRatingsString": "2.2K+",
            "sla": {
                "deliveryTime": 14,
                "lastMileTravel": 1.5,
                "serviceability": "SERVICEABLE",
                "slaString": "10-15 mins",
                "lastMileTravelString": "1.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-03-07 23:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                        "description": "bolt!"
                    },
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "bolt!",
                                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-85b04227-1d45-45dd-9ebd-632ec0f12395"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/phagwara/king-malai-champ-post-office-road-phagwara-central-rest159516",
            "type": "WEBLINK"
        }
    }
];

//<RestaurantCard resData={resList[2]}
 //now instead of writing like this i will use js element
//resName="Patwari Vaishno Dhaba"
//cusine="Chaat, Snacks, Chinese"   />

//if new element come in reslist so we will loop over resList using array Map() function

const Body = () => {
    return (
        <div className="body">
            <div className="search">search</div>
            <div className="res-container">
                {
                    resList.map((restaurant )=> <RestaurantCard key={restaurant?.info.id} resData={restaurant} />)
                
                }
                
            </div>

        </div>
    );
};
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
          
                     
            
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);





