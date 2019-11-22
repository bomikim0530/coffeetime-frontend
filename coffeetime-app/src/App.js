// React imports
import React, { Component } from "react";

// import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

// Start: Styling imports
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// Start: React bootstrap imports
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// End: React bootstrap imports
// End: Styling imports

class App extends Component {
  render() {
    return (
      <Container className="App">
        <Row>
          <Col>Welcome to CoffeeTime powered with Reaact Bootstrap!</Col>
          <Col>
            <Button variant="primary">React Boostrap Button</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

// export default withAuthenticator(App, true);
export default App;
