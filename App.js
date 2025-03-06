import React from "react";
import ReactDOM from "react-dom/client"; 

const x = React.createElement("h1", { id: "xyz" }, "Hello from React");

const root = ReactDOM.createRoot(document.getElementById("abc"));
root.render(x);

const jsx = <h1 style={{ color: "red" }} >Hello from jsxx  </h1>
const rt = ReactDOM.createRoot(document.getElementById("def"));
rt.render(jsx);
