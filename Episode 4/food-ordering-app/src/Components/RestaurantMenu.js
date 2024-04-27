import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const [showIndex, setShowIndex] = useState(null);
    const { restaurantId } = useParams();
    const restaurantInfo = useRestaurantMenu(restaurantId);

    const category = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((card) => {
        return card.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    });

    if (restaurantInfo === null) {
        return <Shimmer />
    }

    const { name, costForTwoMessage, cuisines } = restaurantInfo.cards[2].card.card.info;

    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold m-6">{name}</h1>
            <p className="text-lg font-bold">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {
                category.map((category, index) =>
                    <RestaurantCategory
                        key={category.card.card.menu}
                        menu={category}
                        showItems={index === showIndex && true}
                        setShowIndex={() => setShowIndex(index)}
                    />)
            }
        </div>
    )
}

export default RestaurantMenu;