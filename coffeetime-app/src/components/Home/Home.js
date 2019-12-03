// React imports
import React, { Component } from "react";

import "./Home.css";

// Start: React bootstrap imports
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
// End: React bootstrap imports

// Third-party library imports
import axios from "axios";
import { Link } from "@reach/router";

// React Components import
import { searchApi } from "../../utils";
import Search from "../Search/Search";
import Favorites from "../Favorites/Favorites";

class Home extends Component {
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
      term: "coffee",
      location: "berkeley",
      categories: "Food",
      sort_by: "distance",
      open_now: true
    };
    const response = await axios.get(searchApi, { params: queryParameters }, { header: { "Access-Control-Allow-Origin": "*" } });
    return response.data.businesses;
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
      <Col xs="12" sm="12" lg="4" key={key}>
        {card}
      </Col>
    );
  }

  prepareCardGrid() {
    const cardsList = this.state.searchData.map((business, key) => (
      <Card key={key} as={Link} to={"/business/details/" + business.id} href={"/business/details/" + business.id}>
        <Card.Img
          variant="top"
          src={
            business.image_url === undefined
              ? require("../../assets/hero.jpeg")
              : business.image_url
          }
          className="business-thumbnail"
        />
        <Card.Body>
          <Card.Title>{business.name}</Card.Title>
          <Card.Text>
            Make sure to limit characters of this text or the height to maintain
            UI consistency
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
          <h1 id='searchTitle'>Coffee First.</h1>
          <Search />
        </Jumbotron>
        <Favorites username={this.props.username} favorites={this.props.favorites} />
        <Jumbotron>
          <div>{this.state.cardGrid}</div>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
