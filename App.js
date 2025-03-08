import React from "react";
import ReactDOM from "react-dom/client"; 

const x = React.createElement("h1", { id: "xyz" }, "Hello from React");

const root = ReactDOM.createRoot(document.getElementById("abc"));
root.render(x);

const jsx = <h1 style={{ color: "red" }} >Hello from jsxx  </h1>
const rt = ReactDOM.createRoot(document.getElementById("def"));
rt.render(jsx);


const Comp1 = () => { 
    return (
        <div id="q">
            <Comp2/>
        <h1>hello comp1</h1>
    </div>
    )
};

const Comp2 = () => {
   return  <h1>hello comp2</h1>
}

const rt2 = ReactDOM.createRoot(document.getElementById("react_component"));
rt2.render(<Comp1 />);
