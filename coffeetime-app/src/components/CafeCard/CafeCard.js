import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "@reach/router";

class CafeCard extends Component {
  render() {
    return (
      <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={require('../../assets/hero.jpeg')}/>
        <Card.Body>
          <Card.Title>Cafe Name</Card.Title>
          <Card.Text>
            This cafe is so cool you'll never leave. Great Wi-fi, great coffee,
            great food and great service...
          </Card.Text>
          <Button variant="primary" as={Link} to="/businessdetails" href="/businessdetails">View Details</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default CafeCard;
