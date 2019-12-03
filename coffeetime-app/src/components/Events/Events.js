// React imports
import React, { Component } from "react";
// Start: Styling imports
import "./Events.css";
// Start: React bootstrap imports
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
// End: React bootstrap imports
// End: Styling imports

// Third-party library imports
import axios from "axios";
import { Link } from "@reach/router";

// React Components import
import { eventSearchApi } from "../../utils";
import Search from "../Search/Search";
import Favorites from "../Favorites/Favorites";

class Events extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchData: null,
      cardGrid: null
    };
  }

  async getSearchResponse() {
    // fetch data from a url endpoint
    let queryParameters = {
      location: "berkeley",
      categories: "food-and-drink",
      sort_by: "desc",
    };
    const response = await axios.get(eventSearchApi, { params: queryParameters }, { header: { "Access-Control-Allow-Origin": "*" } });
    return response.data.events;
  }

  componentDidMount() {
    if (!this.state.searchData) {
      (async () => {
        try {
          const searchData = await this.getSearchResponse();
          this.setState({ searchData: searchData });
          this.prepareCardGrid();
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }

  makeCardListsOf3(cardsList) {
    const cardDeckLists = [];
    let i = 0,
      j = 0,
      k = 0;
    while (i + j < cardsList.length) {
      for (let j = 0; j < 3; j++) {
        if (i + j === cardsList.length) {
          break;
        } else {
          if (cardDeckLists[k] === undefined) {
            cardDeckLists[k] = [];
          }
          cardDeckLists[k].push(this.wrapCardInColumn(cardsList[i + j], i + j));
        }
      }
      i = i + 3;
      k = k + 1;
    }
    return cardDeckLists;
  }

  wrapCardInColumn(card, key) {
    return (
      <Col xs="12" sm="12" lg="10" key={key}>
        {card}
      </Col>
    );
  }

  prepareCardGrid() {
    const cardsList = this.state.searchData.map((yelp_event, key) => (
      <Card style={{ height: '30rem' }} key={key} >
        <Card.Img
          variant="top"
          src={
            yelp_event.image_url === undefined
              ? require("../../assets/hero.jpeg")
              : yelp_event.image_url
          }
          className="yelp-event-thumbnail"
        />
        <Card.Body>
          <Card.Title>{yelp_event.name}</Card.Title>
          <Card.Text className = "event-description">
            Attending Count: {yelp_event.attending_count} <br></br>
            Interested Count: {yelp_event.interested_count} <br></br><br></br>
            Address:  {yelp_event.location.display_address} <br></br><br></br>
            {yelp_event.description}
          </Card.Text>
        </Card.Body>
      </Card>
    ));
    const cardListsof3 = this.makeCardListsOf3(cardsList);
    const cardGrid = cardListsof3.map((cardList, key) => {
      return <Row className="my-3" key={key}>{cardList}</Row>;
    });
    this.setState({ cardGrid: cardGrid });
  }

  render() {
    return (
      <div>
        <Jumbotron id='Hero'>
          <h1 id='searchTitle'>Upcoming Events @Berkeley !</h1>
          <Search />
        </Jumbotron>
        
        {/*<Favorites username={this.props.username} favorites={this.props.favorites} />*/}

        <Jumbotron>
          <div>{this.state.cardGrid}</div>
        </Jumbotron>
      </div>
    );
  }

  /*render() {
    return (
      <Row>
        <Col>Welcome to Events!</Col>
        <Col>
          <Button variant="primary">React Boostrap Button</Button>
        </Col>
      </Row>
    );
  } */
}

export default Events;
