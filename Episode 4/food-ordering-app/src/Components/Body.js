import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../Hooks/useOnlineStatus";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import useRestaurant from "../Hooks/useRestaurant";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const { loggedInUser, setUsername } = useContext(UserContext);
    const { restaurant, loading, error } = useRestaurant();

    const hSearchText = (event) => setSearchText(event.target.value);
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    const onlineStatus = useOnlineStatus();

    useEffect(() => {
        if (restaurant) {
            setListOfRestaurant(restaurant);
            setFilteredRestaurant(restaurant);
        }
    }, [restaurant]);

    const handleTopRatedRestaurant = () => {
        const topRated = listOfRestaurant.filter(r => r.info.avgRating > 4.5);
        setFilteredRestaurant(topRated);
    };

    const handleSearchRestaurant = () => {
        const searchRestaurants = listOfRestaurant.filter(r =>
            r.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestaurant(searchRestaurants);
    };

    if (error) return <h1>Something went wrong: {error.message}</h1>;
    if (loading) return <Shimmer />;
    if (onlineStatus === false) return <h1>Looks like you are offline! Check your internet connection.</h1>;
    if (filteredRestaurant.length === 0) return <Shimmer />;

    return (
        <div className="body">
            <div className="flex justify-between mx-6 my-6">
                <button
                    className="font-medium text-white bg-orange-500 p-3 rounded-md hover:bg-orange-600"
                    data-testid="topRatedButton"
                    onClick={handleTopRatedRestaurant}
                >
                    Top Rated Restaurants
                </button>

                <div className="w-[450px]">
                    <label className="pl-4 rounded-lg">Username: </label>
                    <input
                        type="text" className="border-2 outline-none placeholder-black text-black bg-gray-300 w-60 rounded-lg"
                        value={loggedInUser}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className="w-[450px] flex justify-between">
                    <input
                        type="text"
                        className="border-2 outline-none placeholder-black text-black bg-gray-300 w-80 h-12 pl-4 rounded-lg"
                        data-testid="searchInput"
                        value={searchText}
                        onChange={hSearchText}
                        placeholder="Search for restaurant"
                    />
                    <button
                        className="w-24 font-bold text-white bg-orange-500 p-3 rounded-md hover:bg-orange-600"
                        onClick={handleSearchRestaurant}
                    >
                        Search
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurant.map(restaurant => (
                    <Link to={`/restaurant/${restaurant.info.id}`} key={restaurant.info.id}>
                        {restaurant.info.avgRating >= "4.5" ? (
                            <RestaurantCardPromoted resData={restaurant} />
                        ) : (
                            <RestaurantCard resData={restaurant} />
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
