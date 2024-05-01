import { RES_LOGO } from "../utils/constants";
import iconVeg from "../assets/iconVeg.png";
import iconNonVeg from "../assets/iconNonVeg.png";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ data }) => {

    const dispatch = useDispatch()

    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }

    return (
        <div>
            {
                data.map(item =>
                    <div
                        className="m-2 p-2 flex justify-between border-gray-200 border-b-2 mb-3 text-left"
                        data-testid="food-items"
                        key={item.card.info.id}
                    >
                        <div className="w-9/12">
                            <div className="py-2">
                                <img className="w-8 h-8 rounded-xl" src={item.card.info.itemAttribute.vegClassifier === "VEG" ? iconVeg : iconNonVeg}></img>

                                <span className="text-lg font-bold">{item?.card?.info?.name}</span>
                                <span className="text-lg font-bold">
                                    -  ₹
                                    {
                                        item?.card?.info?.price ?
                                            (item?.card?.info?.price / 100)
                                            :
                                            (item?.card?.info?.defaultPrice / 100)
                                    }
                                </span>
                            </div>
                            <p>
                                {item.card.info.description}
                            </p>
                        </div>
                        <div className="w-3/12 p-4">
                            <div className="absolute w-full">
                                <button
                                    className="p-2 bg-white text-green-500 font-bold rounded-md shadow-lg w-24 my-[120px] mx-12"
                                    onClick={() => handleAddItem(item)}
                                >ADD</button>
                            </div>
                            <img className="w-full h-36 rounded-xl" src={RES_LOGO + item.card.info.imageId}></img>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default ItemList;