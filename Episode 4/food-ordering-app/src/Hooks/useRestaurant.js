const { useEffect, useState } = require("react");
import { SWIGGY_URL } from "../utils/constants";

const useRestaurant = () => {
    const [restaurant, setRestaurant] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchRestaurant();
    }, []);

    const fetchRestaurant = async() => {
        try {
            const response = await fetch(SWIGGY_URL);
            const json = await response.json();
            setRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        catch(error) {
            setError(error);
        }
        setLoading(false);
    };

    return { restaurant, loading, error };
};

export default useRestaurant;