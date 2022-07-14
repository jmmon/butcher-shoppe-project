import React from "react";
// import {hydrate, render} from "preact";
import ReactDOM from "react-dom";
import App from "./App";

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );


// react-snap preact
const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
	ReactDOM.hydrate(<App />, rootElement);
} else {
	ReactDOM.render(<App />, rootElement);
}
