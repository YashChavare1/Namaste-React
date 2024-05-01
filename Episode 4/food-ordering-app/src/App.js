import React, { lazy, Suspense, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import ErrorPage from "./Components/ErrorPage";
import RestaurantMenu from "./Components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { useState, useContext } from "react";
import UserContext from "./utils/UserContext";
import ContactPage from "./Components/ContactPage";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
const Cart = lazy(() => import("./Components/Cart"));

const AppLayout = () => {
    const { loggedInUser } = useContext(UserContext)
    const [username, setUsername] = useState(loggedInUser);

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: username, setUsername }}>
                <div className="app">
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/cart",
                element:
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <Cart />
                    </Suspense>
            },
            {
                path: "contact",
                element: <ContactPage />
            },
            {
                path: "/restaurant/:restaurantId",
                element: <RestaurantMenu />
            },
        ],
        errorElement: <ErrorPage />
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);