import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../Components/RestaurantMenu";
import Header from "../Components/Header";
import RestaurantMenuMock from "../mocks/RestaurantMenuMock.json";
import Cart from "../Components/Cart";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(RestaurantMenuMock);
        }
    });
});

it("Should Load Restaurant Menu Component", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestaurantMenu />
                    <Cart />
                </Provider>
            </BrowserRouter>
        );
    });

    const accordianHeader = screen.getByText("Recommended (19)");
    fireEvent.click(accordianHeader);

    
    expect(screen.getAllByTestId("food-items").length).toBe(19);

    const addItemsBtn = screen.getAllByRole("button", { name: "ADD" });
    
    fireEvent.click(addItemsBtn[0]);
    expect(screen.getByText("Cart(1)")).toBeInTheDocument();
    
    fireEvent.click(addItemsBtn[1]);
    expect(screen.getByText("Cart(2)")).toBeInTheDocument();

    expect(screen.getAllByTestId("food-items").length).toBe(21); // 19 items in the accordian and 2 in cart
    
    fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
    
    expect(screen.getAllByTestId("food-items").length).toBe(19); // 19 items in the accordian. Because cart list is empty
    expect(screen.getByText("Cart is Empty, Add Items to cart!!")).toBeInTheDocument();
});