import { useState, useEffect } from "react";
import { RESTAURANT_DETAILS } from "../utils/constants";

const useRestaurantMenu = (restaurantId) => {
    const [restaurantInfo, setRestaurantInfo] = useState(null);
    const [restaurantMenu, setRestaurantMenu] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(RESTAURANT_DETAILS + restaurantId);
                const json = await response.json();
                const info = json?.data?.cards[2]?.card?.card?.info;
                const menu = json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((card) => {
                    return card.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
                });
                setRestaurantMenu(menu);
                setRestaurantInfo(info);
            }
            catch (error) {
                setError(error);
            }
            finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [restaurantId]);

    if (isLoading) {
        return { isLoading: true, restaurantMenu: null, name: null, costForTwoMessage: null, cuisines: null, error: null };
    }

    if (error) {
        return { isLoading: false, restaurantMenu: null, name: null, costForTwoMessage: null, cuisines: null, error };
    }

    const { name, costForTwoMessage, cuisines } = restaurantInfo;
    return { isLoading: false, restaurantMenu, name, costForTwoMessage, cuisines, error: null };
}

export default useRestaurantMenu;
