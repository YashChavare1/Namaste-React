import { RES_LOGO } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
    } = resData?.info;

    const {
        deliveryTime
    } = resData?.info.sla;

    return (
        <div className="res-card">
            <img
                className="res-logo"
                src={RES_LOGO + cloudinaryImageId}
                alt="meghna foods"
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
};

export default RestaurantCard;