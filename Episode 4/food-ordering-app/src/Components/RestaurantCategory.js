import ItemList from "./ItemList";
import DownArrow from "../assets/DownArrow.svg";
import UpArrow from "../assets/UpArrow.svg";

const RestaurantCategory = ({ menu, showItems, setShowIndex }) => {
    const handleMenuClick = () => {
        setShowIndex();
    }

    return (
        <div className="w-6/12 mx-auto bg-gray-50 shadow-lg p-4 my-4">
            <div className="flex justify-between cursor-pointer" onClick={handleMenuClick}>
                <span className="font-bold text-lg">
                    {menu.card.card.title} ({menu.card.card.itemCards.length})
                </span>
                <img src={showItems ? UpArrow : DownArrow}></img>
            </div>
            {
                showItems &&
                <ItemList data={menu.card.card.itemCards} />
            }
        </div>
    );
}

export default RestaurantCategory;