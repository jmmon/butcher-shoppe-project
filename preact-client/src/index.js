import React from "react";
// import {hydrate,} from "preact";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


// // react-snap preact
// const rootElement = document.getElementById("root");

// if (rootElement.hasChildNodes()) {
// 	preact.render(<App />, rootElement, rootElement.firstElementChild);

// } else {
// 	preact.render(<App />, rootElement);
// }
