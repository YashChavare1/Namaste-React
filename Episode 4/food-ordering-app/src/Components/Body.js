import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { SWIGGY_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom"; 
import UserContext from "../utils/UserContext";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    const hSearchText = (event) => setSearchText(event.target.value);
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    const { loggedInUser, setUsername } = useContext(UserContext);

    useEffect(() => {
        fetchData();
    }, []);

    const onlineStatus = useOnlineStatus();

    const fetchData = async () => {
        const data = await fetch(SWIGGY_URL);
        const json = await data.json();
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const handleTopRatedRestaurant = () => {
        const filteredRestaurant = listOfRestaurant.filter((restaurant) => restaurant.info.avgRating > 4.5);
        setFilteredRestaurant(filteredRestaurant);
    }

    const handleSearchRestaurant = () => {
        const searchRestaurants = listOfRestaurant.filter((restaurant) =>
            restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestaurant(searchRestaurants);
    }

    if (onlineStatus === false) return <h1>Look's like your are offline!!! Check your internet Connection.</h1>

    return filteredRestaurant.length === 0 ?
        <Shimmer />
        :
        (
            <div className="body">
                <div className="flex justify-between mx-6 my-6">
                    <button
                        className="font-medium text-white bg-orange-500 p-3 rounded-md hover:bg-orange-600"
                        onClick={() => handleTopRatedRestaurant()}
                    >
                        Top Rated Restaurant
                    </button>

                    <div className="w-[450px]">
                        <label className="pl-4 rounded-lg">Username: </label>
                        <input type="text" className="border-2 outline-none placeholder-black text-black bg-gray-300 w-60 rounded-lg" value={loggedInUser} onChange={(e) => setUsername(e.target.value)} />
                    </div>

                    <div className="w-[450px] flex justify-between">
                        <input type="text" className="border-2 outline-none placeholder-black text-black bg-gray-300 w-80 h-12 pl-4 rounded-lg" value={searchText} onChange={hSearchText} placeholder="Search for restaurant" />
                        <button className="w-24 font-bold text-white bg-orange-500 p-3 rounded-md hover:bg-orange-600" onClick={() => handleSearchRestaurant()}>Search</button>
                    </div>
                </div>
                <div className="flex flex-wrap ">
                    {filteredRestaurant.map((restaurant) => (
                        <Link
                            to={"/restaurant/" + restaurant.info.id}
                            key={restaurant.info.id}
                        >
                            {
                                restaurant.info.avgRating >= "4.5" ? (
                                    <RestaurantCardPromoted resData={restaurant} />
                                ) : (
                                    <RestaurantCard resData={restaurant} />
                                )}
                        </Link>
                    ))}
                </div>
            </div>
        );
}

export default Body;