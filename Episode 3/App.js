import React from "react"
import ReactDOM from "react-dom/client";

const jsxHeading = (
    <h1 id="heading">
        Namaste React Element 🚀
    </h1>
)

const HeadingComponent = () => {
    return <h1 id="heading"> Namaste React functional Component 🚀 </h1>   
}


// Component Compositions
const NewHeadingComponent = () => (
    <div id="container">
        <h1>This is Component Compositions 🚀</h1>
        {jsxHeading}    {/* Using React element */}
        <HeadingComponent />    { /* adding HeadingComponent inside NewHeadingCompoent */ }
    </div>
)

const PageComponent = () => (
    <div>
        {NewHeadingComponent()}     {/*we are calling Component like a function Because it is a function in js atlast */}
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(jsxHeading); // Rendering element
// root.render(<NewHeadingComponent />);  // Rendering Function Component
root.render(<PageComponent />)