// heading is an react element, and its an object
// react element is nothing but an js object
// The heading is not a h1 tag yet
const heading = React.createElement(
    "h1",
    { id: "heading" },  // These are Attribute. Given id to the h1 tag.
    "Hello World from React!"   // this is the childern which will go inside the h1 tag
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);  // the render will convert the React element(js object) into the html code and put inside the root  