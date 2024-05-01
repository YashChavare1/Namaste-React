import { render, screen } from "@testing-library/react"
import ContactPage from "../Components/ContactPage"
import "@testing-library/jest-dom";

// describe block is used for grouping the test cases
describe("Testing the Contact Page Component", () => {
    // // This will run before all test case, means 1 time initially 
    // beforeAll(() => {
    //     console.log("Before All");
    // });

    // // This will run before each test case
    // beforeEach(() => {
    //     console.log("Before Each");
    // })

    // // It will run when all test case are completed
    // afterAll(() => {
    //     console.log("After All");
    // });

    // // This will run after each test case
    // afterEach(() => {
    //     console.log("After Each");
    // });

    test("Should load contact us component", () => {
        render(<ContactPage />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });
    
    // we can also write "it" instead of "test", both will work same
    it("Should have 2 textfield(input) in the component", () => {
        render(<ContactPage />)
        const inputBoxes = screen.getAllByRole("textbox");
        expect(inputBoxes.length).toBe(2);
    });
    
    it("Should have 1 button in the component", () => {
        render(<ContactPage />)
        const button = screen.getAllByRole("button");
        expect(button.length).toBe(1);
    });
})

