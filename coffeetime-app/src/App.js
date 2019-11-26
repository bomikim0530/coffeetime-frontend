// React imports
import React, { Component } from "react";
import { Router, Link } from "@reach/router";

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
import Events from "./components/Events/Events"

class App extends Component {
  render() {
    return (
      <Container className="App">
        <Router>
          <Home path="/home" />
          <Events path="events" />
        </Router>
      </Container>
    );
  }
}

// export default withAuthenticator(App, true);
export default App;
