//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import TicTacToe from "./component/home.jsx";

//render your react application
ReactDOM.render(<TicTacToe />, document.querySelector("#app"));


function startGame(){
console.log('start game')
}