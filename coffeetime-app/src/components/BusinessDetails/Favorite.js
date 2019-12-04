import React from 'react';

class Favorite extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      markAsFavorite: true,
      markText: "Mark as Favorite"
    }
    this.markAsFavoriteHandler = this.markAsFavoriteHandler.bind(this);
    this.unmarkAsFavoriteHandler = this.unmarkAsFavoriteHandler.bind(this);
    this.markToggle = this.markToggle.bind(this);
  }

  componentDidMount() {
    this.isFavorite();
  }

  isFavorite() {
    let userdata = localStorage.getItem(this.props.username);
    if (userdata !== undefined && userdata !== null && userdata !== "") {
      userdata = JSON.parse(userdata);
      if (userdata["favorites"] !== undefined && userdata["favorites"] !== null && userdata["favorites"].length !== 0) {
        for (let i = 0; i < userdata["favorites"].length; ++i) {
          let business = userdata["favorites"][i];
          if (business.id === this.props.businessDetail.id) {
            this.setState({ markAsFavorite: null, markText: "Unmark as Favorite" });
            break;
          }
        }
      }
    }
  }

  markAsFavoriteHandler() {
    let userdata = localStorage.getItem(this.props.username);
    if (userdata === undefined || userdata === null || userdata === "") {
      userdata = {}
      localStorage.setItem(this.props.username, JSON.stringify({ "favorites": [this.props.businessDetail] }));
    } else {
      userdata = JSON.parse(userdata);
      if (userdata["favorites"] === undefined || userdata["favorites"] === null) {
        userdata["favorites"] = [this.props.businessDetail]
        localStorage.setItem(this.props.username, JSON.stringify(userdata));
      } else {
        userdata.favorites.push(this.props.businessDetail)
        localStorage.setItem(this.props.username, JSON.stringify(userdata));
      }
    }
  };

  unmarkAsFavoriteHandler() {
    let userdata = localStorage.getItem(this.props.username);
    if (userdata === undefined || userdata === null || userdata === "") {
      userdata = {}
      localStorage.setItem(this.props.username, { "favorites": [] });
    } else {
      userdata = JSON.parse(userdata);
      if (userdata["favorites"] === undefined || userdata["favorites"] === null) {
        userdata["favorites"] = []
      } else {
        let updated_favorites = []
        for (let i = 0; i < userdata["favorites"].length; ++i) {
          let businness = userdata["favorites"][i];
          if (businness.id === this.props.businessDetail.id) {
            continue;
          } else {
            updated_favorites.push(userdata["favorites"][i]);
          }
        }
        userdata["favorites"] = updated_favorites;
        localStorage.setItem(this.props.username, JSON.stringify(userdata));
      }
    }
  };

  markToggle() {
    if (this.state.markAsFavorite === true) {
      this.markAsFavoriteHandler();
      this.setState({ markAsFavorite: null, markText: "Unmark as Favorite" });
    } else {
      this.unmarkAsFavoriteHandler();
      this.setState({ markAsFavorite: true, markText: "Mark as Favorite" });
    }
    this.props.favoriteListChangeHandler();
  }

  render() {
    return (
      <div className="my-2">
        <button className="btn btn-danger" onClick={this.markToggle}>{this.state.markText}</button>
      </div>
    );
  }
}

export default Favorite;