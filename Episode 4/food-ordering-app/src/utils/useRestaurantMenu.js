import { useState, useEffect } from "react"; 
import { RESTAURANT_DETAILS } from "../utils/constants";

const useRestaurantMenu = (restaurantId) => {
    const [restaurantInfo, setRestaurantInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);
    
    const fetchData = async() => {
        const data = await fetch(RESTAURANT_DETAILS + restaurantId);
        const json = await data.json();
        setRestaurantInfo(json.data);
    }

    return restaurantInfo;
}

export default useRestaurantMenu;