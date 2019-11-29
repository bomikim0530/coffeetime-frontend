// React imports
import React, { Component } from "react";
// Start: Styling imports
import "./Favorites.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import { Link } from "@reach/router";

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardGrid: null
    }
    this.prepareCardGrid = this.prepareCardGrid.bind(this);
  }

  componentWillMount() {
    this.prepareCardGrid();
  }

  componentWillReceiveProps() {
    this.prepareCardGrid();
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
    const cardsList = this.props.favorites.map((business, key) => (
      <Card key={key} as={Link} to={"/business/details/" + business.id} href={"/business/details/"+business.id}>
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
    return ( this.state.cardGrid !== null &&
      <div>
        {this.state.cardGrid}
      </div>
    );
  }
}

export default Favorites;
