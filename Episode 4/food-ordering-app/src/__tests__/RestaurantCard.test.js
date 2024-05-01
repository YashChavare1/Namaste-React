import { render, screen } from "@testing-library/react";
import RestaurantCard from "../Components/RestaurantCard";
import RestaurantCardMock from "../mocks/RestaurantCardMock.json";
import "@testing-library/jest-dom"

it("Should render RestaurantCard with props data", () => {
    render(<RestaurantCard resData={RestaurantCardMock} />);

    const restaurantName = screen.getByText("Chinese Wok");
    expect(restaurantName).toBeInTheDocument();
});

it("Should render RestaurantCard component with Promoted Label", () => {

});