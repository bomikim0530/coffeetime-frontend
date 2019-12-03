import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
  Container,
  Form,
  FormControl
} from "react-bootstrap";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchLoc: ""
    };

    this.onSearchLocChange = this.onSearchLocChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onSearchLocChange(event) {
    this.setState({ searchLoc: event.target.value });
  }

  onButtonClick(event) {
    // alert("child");
    this.props.updateLocation(this.state.searchLoc);
  }

  render() {
    return (
      <Container>
        <Row sm={12}>
          <Col sm={12}>
            {/* <img src={require('../assets/coffeehero.jpg')} /> */}
          </Col>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" value={this.state.searchLoc} onChange={this.onSearchLocChange}/>
            <Button className="btn-primary" onClick={this.onButtonClick}>Find Cafes</Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
