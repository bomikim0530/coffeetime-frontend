// React imports
import React, { Component } from "react";
import { Router } from "@reach/router";

// import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

// Start: Styling imports
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Start: React bootstrap imports
import Container from "react-bootstrap/Container";
// End: React bootstrap imports
// End: Styling imports

import Home from "./components/Home/Home"
// import Events from "./components/Events/Events"
import Profile from "./components/Profile/Profile"
import BusinessDetails from "./components/BusinessDetails/BusinessDetails"

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      favorites: null
    }
    this.getFavoritesList = this.getFavoritesList.bind(this);
    this.takeUpdateToFavoritesList = this.takeUpdateToFavoritesList.bind(this);
    this.favoriteListChangeHandler = this.favoriteListChangeHandler.bind(this);
  }

  componentWillMount() {
    if (this.state.favorites === null) {
      this.takeUpdateToFavoritesList();
    }
  }

  takeUpdateToFavoritesList() {
    this.setState({ favorites: this.getFavoritesList() })
  }

  getFavoritesList() {
    let userdata = localStorage.getItem(this.props.username);
    if (userdata !== undefined && userdata !== null && userdata !== "") {
      userdata = JSON.parse(userdata);
      if (userdata["favorites"] !== undefined && userdata["favorites"] !== null) {
        return userdata["favorites"]
      }
    }
    return [];
  }

  favoriteListChangeHandler() {
    this.takeUpdateToFavoritesList();
  }

  render() {
    return (
      <Container className="App">
        <Router>
          <Home path="/" username={this.props.username} favorites={this.state.favorites}/>
          {/*<Events path="/events" />*/}
          <Profile path="/profile" username={this.props.username} />
          <BusinessDetails path="/business/details/:businessId" username={this.props.username} favoriteListChangeHandler={this.favoriteListChangeHandler}/>
        </Router>
      </Container>
    );
  }
}

// export default withAuthenticator(App, true);
export default App;
