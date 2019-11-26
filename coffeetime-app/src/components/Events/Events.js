// React imports
import React, { Component } from "react";
// Start: Styling imports
import "./Events.css";
// Start: React bootstrap imports
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// End: React bootstrap imports
// End: Styling imports

class Events extends Component {
  render() {
    return (
      <Row>
        <Col>Welcome to Events!</Col>
        <Col>
          <Button variant="primary">React Boostrap Button</Button>
        </Col>
      </Row>
    );
  }
}

export default Events;
