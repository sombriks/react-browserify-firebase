import "./main.css";
import React from "react";
import ReactDOM from "react-dom";

const Hello = props => {
  return <h1>Hail world!</h1>;
};

ReactDOM.render(<Hello />, document.getElementById("root"));
