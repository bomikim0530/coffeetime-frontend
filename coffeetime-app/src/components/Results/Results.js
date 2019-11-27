import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import CafeCard from "../CafeCard/CafeCard";
// import './Home.css';

export default class Results extends Component {
  render() {
    return (
      <Container>
        <Row className="my-3">
          <Col sm={4}>
            <CafeCard />
          </Col>
          <Col sm={4}>
            <CafeCard />
          </Col>
          <Col sm={4}>
            <CafeCard />
          </Col>
        </Row>
      </Container>
    );
  }
}
