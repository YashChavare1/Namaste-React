import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../Hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const [showIndex, setShowIndex] = useState(null);
    const { restaurantId } = useParams();
    const { restaurantMenu, name, costForTwoMessage, cuisines } = useRestaurantMenu(restaurantId);

    if (restaurantMenu === null) {
        return <Shimmer />
    }

    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold m-6">{name}</h1>
            <p className="text-lg font-bold">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {
                restaurantMenu.map((category, index) =>
                    <RestaurantCategory
                        key={category.card.card.title}
                        menu={category}
                        showItems={index === showIndex && true}
                        setShowIndex={() => setShowIndex(index)}
                    />
                )
            }
        </div>
    )
}

export default RestaurantMenu;