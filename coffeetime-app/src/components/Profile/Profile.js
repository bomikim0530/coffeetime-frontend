// React imports
import React, { Component } from "react";
// Start: Styling imports
import "./Profile.css";
// Start: React bootstrap imports
// import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
// End: React bootstrap imports
// End: Styling imports

class Profile extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   username: this.props.username
    // }
    console.log(this.props.username);
    this.saveProfile = this.saveProfile.bind(this);
  }

  profileSubmitHandler(event) {
    event.preventDefault();
    this.saveProfile();
  }

  saveProfile = () => {
    console.log("saved profile")
  }
  render() {
    return (
      <Form className="profile-form mx-auto mt-5" onSubmit={(event) => this.profileSubmitHandler(event)}>
        <Form.Row className="my-2">
          <Form.Group as={Col} controlId="username">
            <Form.Label>Username</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder={this.props.username}
                readOnly
              />
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridFullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter full name" />
          </Form.Group>
        </Form.Row>
        <Form.Group controlId="formGridAddress1" className="my-2">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group controlId="formGridAddress2" className="my-2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Form.Row className="my-2">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit" className="my-2">
          Save
        </Button>
      </Form>
    );
  }
}

export default Profile;
