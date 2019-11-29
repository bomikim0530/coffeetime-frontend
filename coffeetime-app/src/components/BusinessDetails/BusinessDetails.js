// React imports
import React, { Component } from "react";
// Start: Styling imports
import "./BusinessDetails.css";

import axios from "axios";
import { detailApi, reviewsApi } from "../../utils";

class BusinessDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      detail: null,
      reviews: []
    }
  }

  UNSAFE_componentWillMount() {
    (async () => {
      try {
        const detail = await this.getBusinessDetail(this.props.businessId);
        const reviews = await this.getBusinessReviews(this.props.businessId);
        this.setState({
          reviews: reviews,
          detail: detail
        });
        // console.log(this.state.detail);
        // console.log(this.state.reviews)
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

  render() {
    return (
      <div>
        Welcome to business details!!

        BOMII!!
      </div>
    );
  }
}

export default BusinessDetails;
