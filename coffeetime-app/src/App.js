// React imports
import React, { Component } from "react";
import ReactDOM from "react-dom";

// Amplify imports
import { configureAmplify } from "./services";
import Auth from "@aws-amplify/auth";
import { withAuthenticator } from "aws-amplify-react";

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
  state = {
    identityId: ""
  };

  constructor(props) {
    super(props);
    Auth.currentCredentials().then(
      response => {
        // console.log(response.data.IdentityId);
        this.state.identityId = response.data.IdentityId;
      },
      err => {
        console.log("Unable to fetch current credentials");
      }
    );
  }

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

configureAmplify();
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default withAuthenticator(App, true);
