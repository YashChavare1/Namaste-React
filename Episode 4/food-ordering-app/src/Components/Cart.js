import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-4 p-4">
            <h1 className="font-bold text-2xl">Cart</h1>
            <div className="w-6/12 mx-auto">
                <button
                    className="p-2 m-2 bg-red-600 text-white rounded-lg font-bold"
                    onClick={handleClearCart}
                >
                    Clear Cart
                </button>
                {cartItems.length === 0 && <h1>Cart is Empty, Add Items to cart!!</h1>}
                <ItemList data={cartItems} />
            </div>
        </div>
    );
}

export default Cart;