import { CDN_URL } from "../utils/constants"
import { styleCard} from "../utils/constants"



const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId,name,avgRating,costForTwo,sla,cuisines} = resData?.info;   //this is optional chaining instead of writing resdata?.info?.name we only use name
    return (
        <div className="res-card" style={styleCard} >
            <img
                className="res-logo1"
                src={CDN_URL+cloudinaryImageId} />
            <h4>{ name}</h4>         
            <h5>{ cuisines.join(",")}</h5>
            <h5>Rating:{avgRating}</h5>
            <h5>{costForTwo}   </h5>
            <h5>{sla?.slaString}</h5>
        </div>

    );
};

export default RestaurantCard ;
