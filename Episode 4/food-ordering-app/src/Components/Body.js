import { SWIGGY_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    const hSearchText = (event) => setSearchText(event.target.value);

    useEffect(() => {
        fetchData();
    }, []);

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

    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-top-rated"
                    onClick={() => handleTopRatedRestaurant()}
                >
                    Top Rated Restaurant
                </button>

                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={hSearchText} />
                    <button onClick={() => handleSearchRestaurant()}>Search</button>
                </div>

            </div>
            <div className="res-container">
                {filteredRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
}

export default Body;