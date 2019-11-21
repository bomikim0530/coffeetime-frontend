import React from "react";
import App from "../../App";
import { configureAmplify } from "../../services";

// import $ from "jquery";

import { Hub } from 'aws-amplify';
import Auth from "@aws-amplify/auth";
import { Authenticator, Greetings } from "aws-amplify-react";

import './AppWithAuth.css'

// Start: React bootstrap imports
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
// End: React bootstrap imports

class AppWithAuth extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: "",
      username: "",
      isSignedIn: false
    };
    const listener = (data) => {

        switch (data.payload.event) {
        
            case 'signIn':
                this.setCurrentUser();
                this.rerender();
                break;
            default:
        }
    }
    Hub.listen('auth', listener);
    this.setCurrentUser();
    this.signOutHandler = this.signOutHandler.bind(this);
  }

  rerender = () => this.forceUpdate();

  componentDidMount() {
      
  }

  fetchCurrentUser = async () => {
    const currentUser = await Auth.userPool.getCurrentUser();
    return currentUser;
  };

  setCurrentUser= async () => {
    const currentUser = await this.fetchCurrentUser();
    if (currentUser !== undefined && currentUser !== null) {
        this.setState({
          username: currentUser.username,
          isSignedIn: true
        });
    } else {
        this.setState({
          username: null,
          isSignedIn: false
        });
    }
  }
  signOut = async () => {
    const currentUser = await this.fetchCurrentUser();
    await currentUser.signOut();
    await this.setCurrentUser();
    this.rerender();
  };

  signOutHandler = () => {
      this.signOut();
  }

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="../../favicon.ico"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            CoffeeTime
          </Navbar.Brand>
          {this.state.isSignedIn && (
            <div className="d-flex">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Events</Nav.Link>
              </Nav>
              <Nav className="profile-dropdown">
                <NavDropdown
                  title="Chintan"
                  id="collasible-nav-dropdown"
                  drop="left"
                >
                  <NavDropdown.Item href="#action/3.1">
                    Edit Profile
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onSelect={this.signOutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </div>
          )}
        </Navbar>
        {!this.state.isSignedIn && (<Authenticator hide={[Greetings]}>
        </Authenticator>)}
        {this.state.isSignedIn && (<App />)}
      </div>
    );
  }
}
configureAmplify();

export default AppWithAuth;
