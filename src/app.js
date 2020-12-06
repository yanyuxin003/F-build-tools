import React from "react";
import ReactDOM from "react-dom";
import "./app.scss";

class Hello extends React.Component {
    render() {
        return <div class="hello">Hello world!!</div>;
    }
}

var mountNode = document.getElementById("app");