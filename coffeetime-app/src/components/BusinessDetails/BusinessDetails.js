// React imports
import React, { Component } from "react";
// Start: Styling imports
import "./BusinessDetails.css";

import axios from "axios";
import { detailApi, reviewsApi } from "../../utils";

// Other components import
import CommentForm from './CommentForm.js';
import CommentView from './CommentView.js';
import Favorite from './Favorite.js';

class BusinessDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      detail: null,
      reviews: [],
      latestComments: [],
      yelpComments: []
    }
    this.getLatestComments = this.getLatestComments.bind(this);
    this.getYelpComments = this.getYelpComments.bind(this);
    this.refreshCommentsViewHandler = this.refreshCommentsViewHandler.bind(this);
    this.favoriteListChangeHandler = this.favoriteListChangeHandler.bind(this);
  }

  UNSAFE_componentWillMount() {
    (async () => {
      try {
        const detail = await this.getBusinessDetail(this.props.businessId);
        const reviews = await this.getBusinessReviews(this.props.businessId);

        if (localStorage.getItem(this.props.businessId) === undefined || localStorage.getItem(this.props.businessId) === null) {
          this.setState({ latestComments: [] })
          localStorage.setItem(this.props.businessId, JSON.stringify(this.state.latestComments));
        } else {
          this.setState({ latestComments: JSON.parse(localStorage.getItem(this.props.businessId)) })
        }
        let transformedYelpReviews = []
        if (reviews !== undefined && reviews.length !== 0) {
          transformedYelpReviews = reviews.map((review, key) => {
            return { "name": review.user.name, "message": review.text }
          })
        }
        this.setState({
          reviews: reviews,
          detail: detail,
          yelpComments: transformedYelpReviews
        });
      } catch (e) {
        console.log(e);
      }
    })();
  }

  async getBusinessDetail(businessId) {
    const response = await axios.get(detailApi, { params: { "business_id": businessId } }, null, { header: { "Access-Control-Allow-Origin": "*" } });
    return response.data;
  }

  async getBusinessReviews(businessId) {
    const response = await axios.get(reviewsApi, { params: { "business_id": businessId } }, null, { header: { "Access-Control-Allow-Origin": "*" } });
    return response.data.reviews;
  }

  isEmpty(x) {
    if (x === undefined || x === null || x === "" || x.length === 0) return true;
    return false;
  }

  isUndefinedOrNull(x) {
    if (x === undefined || x === null) return true;
    return false;
  }

  isDataLoaded() {
    if (!this.isEmpty(this.state.detail) && !this.isUndefinedOrNull(this.state.reviews)) {
      return true;
    }
    return null;
  }

  refreshCommentsViewHandler() {
    let latestComments = JSON.parse(localStorage.getItem(this.props.businessId));
    this.setState({ latestComments: latestComments })
  }

  getLatestComments() {
    return this.state.latestComments;
  }

  getYelpComments() {
    return this.state.yelpComments;
  }

  favoriteListChangeHandler() {
    this.props.favoriteListChangeHandler();
  }

  render() {
    return (this.isDataLoaded() && <div>
      <h1>{this.state.detail.name}</h1><br />
      <table>
        <tbody>
          <tr>
            <td width="400px"><img className="business-thumbnail" src={this.state.detail.image_url === undefined ? require("../../assets/hero.jpeg") : this.state.detail.image_url} alt="business thumbnail" /><br/><Favorite pageid={this.props.businessId} username={this.props.username} businessDetail={this.state.detail} favoriteListChangeHandler={this.favoriteListChangeHandler} /></td>
            <td width="700px">
              <h3>Details</h3>
              <table className="inside">
                <tbody>
                  <tr><td width="100%">A little table with the details about the vendor : this is to see how long it can get</td></tr>
                </tbody>
              </table>
              <h3>Reviews</h3>
              <table className="inside"><tbody><tr><td width="100%"><CommentView pageid={this.props.businessId} username={this.props.username} getLatestComments={this.getLatestComments} getYelpComments={this.getYelpComments} /></td></tr></tbody></table>
              <CommentForm pageid={this.props.businessId} username={this.props.username} refreshCommentsView={this.refreshCommentsViewHandler} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    )
  };
}

export default BusinessDetails;
