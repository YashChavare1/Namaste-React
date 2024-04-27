import React, { lazy, Suspense, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import ErrorPage from "./Components/ErrorPage";
import AboutPage from "./Components/AboutPage";
import ContactPage from "./Components/ContactPage";
import RestaurantMenu from "./Components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { useState, useContext } from "react";
import UserContext from "./utils/UserContext";
const GroceryPage = lazy(() => import("./Components/GroceryPage"));

const AppLayout = () => {
    const { loggedInUser } = useContext(UserContext)
    const [username, setUsername] = useState(loggedInUser);

    return (
        <UserContext.Provider value={{ loggedInUser: username, setUsername }}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
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
                path: "/about",
                element: <AboutPage />
                // element: <AboutDetailsClass />
            },
            {
                path: "/contact",
                element: <ContactPage />
            },
            {
                path: "/grocery",
                element:
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <GroceryPage />
                    </Suspense>
            },
            {
                path: "/restaurant/:restaurantId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <ErrorPage />
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);