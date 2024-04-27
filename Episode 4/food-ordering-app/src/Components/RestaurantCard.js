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
        <div className="m-4 w-[270px] h-[350px] bg-gray-100 rounded-lg p-0 hover:bg-gray-200">
            <img
                className="rounded-t-lg w-full h-1/2"
                src={RES_LOGO + cloudinaryImageId}
                alt="meghna foods"
            />
            <h3 className="font-bold py-3 text-center">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
};

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <>
                <label className="absolute bg-red-500 text-white m-2 rounded-r-lg pl-2 ml-4 mt-4 w-24 font-serif">
                    Top Rated
                </label>
                <RestaurantCard {...props} />
            </>
        )
    }
}

export default RestaurantCard;