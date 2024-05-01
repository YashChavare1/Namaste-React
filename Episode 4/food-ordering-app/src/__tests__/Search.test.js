const { render, screen, fireEvent } = require("@testing-library/react");
import { act } from "react-dom/test-utils";
import Body from "../Components/Body";
import RestaurantListMock from "../mocks/RestaurantListMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(RestaurantListMock);
        }
    });
});

it("should render the Restaurant List for burger Search input", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );

    // screen should load 20 cards initially
    const cardsBeforeSearch = screen.getAllByTestId("restaurantCard");
    expect(cardsBeforeSearch.length).toBe(20);

    const searchBtn = screen.getByRole("button", { name: "Search" });
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, { target: { value: "burger" } });
    fireEvent.click(searchBtn);

    // screen should load 1 card after seaching for "burger"
    const cardsAfterSearch = screen.getAllByTestId("restaurantCard");
    expect(cardsAfterSearch.length).toBe(1);
});

it("Should filter top rated Restaurant", async() => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        );
    })

    const cardsBeforeFilter = screen.getAllByTestId("restaurantCard");
    expect(cardsBeforeFilter.length).toBe(20);
    
    const topRatedButton = screen.getByTestId("topRatedButton");
    fireEvent.click(topRatedButton);
    
    const cardsAfterFilter = screen.getAllByTestId("restaurantCard");
    expect(cardsAfterFilter.length).toBe(5);
})