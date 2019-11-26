// React imports
import React, { Component } from "react";
// Start: Styling imports
import "./Home.css";
// Start: React bootstrap imports
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// End: React bootstrap imports
// End: Styling imports

class Home extends Component {
  render() {
    return (
      <Row>
        <Col>Welcome to CoffeeTime powered with Reaact Bootstrap!</Col>
        <Col>
          <Button variant="primary">React Boostrap Button</Button>
        </Col>
      </Row>
    );
  }
}

export default Home;
