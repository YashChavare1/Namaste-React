import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnLogin, setBtnLogin] = useState("Login");

    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);

    return (
        <div className="flex justify-between items-center shadow-lg mb-2 px-5">
            <div className="logo-container">
                <Link to="/">
                    <img
                        className="w-28"
                        src={LOGO_URL}
                        alt="website logo"
                    />
                </Link>
            </div>
            <div className="nav-items">
                <ul className="flex">
                    <li className="w-36 text-center">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="w-28 text-center"><Link to="/">Home</Link></li>
                    <li className="w-28 text-center"><Link to="/about">About Us</Link></li>
                    <li className="w-28 text-center"><Link to="/contact">Contact Us</Link></li>
                    <li className="w-28 text-center"><Link to="/grocery">Grocery</Link></li>
                    <li className="w-28 text-center">Cart</li>
                    <button className="w-28 text-center" onClick={() => {
                        btnLogin === "Login" ?
                            setBtnLogin("Logout")
                            :
                            setBtnLogin("Login")
                    }}>{btnLogin}</button>
                    <li className="w-28 text-center font-bold">{ loggedInUser }</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;