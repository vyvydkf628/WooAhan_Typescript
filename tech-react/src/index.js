import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const rootElement = document.getElementById("root");

const sessionList = [
  { id: 1, title: "1회차 : Overview"},
  { id: 2, title: "2회차 : React"},
  { id: 3, title: "3회차 : Redux"},
  { id: 4, title: "4회차 : 컴포넌트 만들기"},
];

ReactDOM.render(
  <React.StrictMode>
    <App store={ { sessionList } } />
  </React.StrictMode>
)