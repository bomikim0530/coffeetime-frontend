// React imports
import React, { Component } from "react";
// Start: Styling imports
import "./Home.css";
// Start: React bootstrap imports
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
// End: React bootstrap imports
// End: Styling imports
import Results from "../Results/Results";
import Search from "../Search/Search";
import Favorites from "../Favorites/Favorites";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: []
    }
    console.log(localStorage.getItem(this.props.username));
  }
  render() {
    return (
      <div>
        <Jumbotron>
          <h2>Search for cafes</h2>
          <Search />
        </Jumbotron>
        <Favorites username={this.props.username}/>
        <Jumbotron>
          <h3>Cafes near Oxford and University</h3>
          <Results />
          <Results />
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
