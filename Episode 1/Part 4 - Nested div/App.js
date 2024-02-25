/*
    Q- How to use Nested div and pass element inside a div
    <div id="parent">
        <div id="child">
            <h1>Hola form React Nested div</h1>
        </div>
    </div>
*/ 

// React Element "parent" is an object
const parent = React.createElement( // div 'parent'
    "div",
    { id: "parent" },  
    React.createElement(    // pass div 'child' inside the div 'parent' as its child element
        "div",
        { id: "child" },
        React.createElement(    // pass h1 inside the div 'child' as its child element
            "h1",
            {},
            "Hola from React Nested div",
        )
    ) 
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);    // rendering React element(object) into html code and passing to root