import React, { Component } from "react";
import { Jumbotron, Row, Col, Image, Button, Container, Form, FormControl } from 'react-bootstrap';
import CafeCard from '../CafeCard/CafeCard';
// import './Home.css';

export default class Search extends Component {
    render() {
        return (
            <Container>
                    <Row sm={12}>
                        <Col sm={12}>
                        {/* <img src={require('../assets/coffeehero.jpg')} /> */}
                        </Col>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button className="btn-primary">Find Cafes</Button>
                        </Form>
                    </Row>
            </Container>
        )
    }
}
