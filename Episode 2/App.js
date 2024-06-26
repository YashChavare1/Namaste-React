import React from "react"
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "This is Nameste React 🚀"),
        React.createElement("h2", {}, "This is H2 Tag"),
    ]),
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "This is H1 Tag"),
        React.createElement("h2", {}, "This is H2 Tag"),
    ]),
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);