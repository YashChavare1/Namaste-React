import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Guest Account",
});

export default UserContext;