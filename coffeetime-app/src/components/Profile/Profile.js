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
import Alert from "react-bootstrap/Alert";
// End: React bootstrap imports
// End: Styling imports

class Profile extends Component {
  constructor(props) {
    super(props);
    let profileData = localStorage.getItem(this.props.username + "_profileData");
    if (profileData !== undefined && profileData !== null && profileData !== "") {
      profileData = JSON.parse(profileData);
      this.state = {
        fullName: profileData.fullName ? profileData.fullName : "",
        address1: profileData.address1 ? profileData.address1 : "",
        address2: profileData.address2 ? profileData.address2 : "",
        city: profileData.city ? profileData.city : "",
        state: profileData.state ? profileData.state : "",
        zip: profileData.zip ? profileData.zip : "",
        showAlert: false
      };
    } else {
      this.state = {
        fullName: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        showAlert: false
      };
    }

    this.saveProfile = this.saveProfile.bind(this);
    this.onFullNameChange = this.onFullNameChange.bind(this);
    this.onAddress1Change = this.onAddress1Change.bind(this);
    this.onAddress2Change = this.onAddress2Change.bind(this);
    this.onCityChange = this.onCityChange.bind(this);
    this.onStateChange = this.onStateChange.bind(this);
    this.onZipChange = this.onZipChange.bind(this);
    this.setShowAlert = this.setShowAlert.bind(this);
  }

  setShowAlert(value) {
    this.setState({ showAlert: value });
  }

  profileSubmitHandler(event) {
    event.preventDefault();
    this.saveProfile();
  }
  onFullNameChange(event) {
    this.setState({ fullName: event.target.value })
  }
  onAddress1Change(event) {
    this.setState({ address1: event.target.value })
  }
  onAddress2Change(event) {
    this.setState({ address2: event.target.value })
  }
  onCityChange(event) {
    this.setState({ city: event.target.value })
  }
  onStateChange(event) {
    this.setState({ state: event.target.value })
  }
  onZipChange(event) {
    this.setState({ zip: event.target.value })
  }
  saveProfile = () => {
    let profileData = {
      fullName: this.state.fullName,
      address1: this.state.address1,
      address2: this.state.address2,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip
    };
    localStorage.setItem(this.props.username + "_profileData", JSON.stringify(profileData));
    this.setShowAlert(true);
  };
  render() {
    return (
      <div>
        {this.state.showAlert &&
          (<Alert variant="success" onClose={(e) => this.setShowAlert(false)} dismissible>
            <Alert.Heading>Successfully updated profile information!</Alert.Heading>
          </Alert>
          )}

        <Form
          className="profile-form mx-auto mt-5"
          onSubmit={event => this.profileSubmitHandler(event)}
        >
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
              <Form.Control type="text" placeholder="Enter full name" value={this.state.fullName} onChange={this.onFullNameChange} />
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="formGridAddress1" className="my-2">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" value={this.state.address1} onChange={this.onAddress1Change} />
          </Form.Group>

          <Form.Group controlId="formGridAddress2" className="my-2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" value={this.state.address2} onChange={this.onAddress2Change} />
          </Form.Group>

          <Form.Row className="my-2">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control value={this.state.city} onChange={this.onCityChange} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control value={this.state.state} onChange={this.onStateChange} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control value={this.state.zip} onChange={this.onZipChange} />
            </Form.Group>
          </Form.Row>

          <Button variant="primary" type="submit" className="my-2">
            Save
        </Button>
        </Form>
      </div>
    );
  }
}

export default Profile;
