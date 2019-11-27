// React imports
import React, { Component } from "react";
// Start: Styling imports
import "./Favorites.css";
import Jumbotron from "react-bootstrap/Jumbotron";

class Favorites extends Component {
    constructor(props) {
        super(props);
        localStorage.setItem(this.props.username, JSON.stringify({"favorites": ["businessid 1","businessid 2"]}));
    }
  render() {
    return (
      <div>
        <Jumbotron>   Nithyaa add favorites!</Jumbotron>
      </div>
    );
  }
}

export default Favorites;
