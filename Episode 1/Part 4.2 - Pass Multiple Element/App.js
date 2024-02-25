/*
    Q - how to pass two tags inside a div
    <div id="parent">
        <div id="child">
            <h1>This is H1 tag</h1>
            <h2>This is H1 tag</h2>
        </div>
    </div>
*/

// Passing multiple Element in a div, we can make use of array of element as a child. The array can contain multiple elements

// React Element(JS Object)
const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        // Pass array of element as a child.
        [
            React.createElement("h1", {}, "This is H1 Tag"),
            React.createElement("h2", {}, "This is H2 Tag"),
        ]
    )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
