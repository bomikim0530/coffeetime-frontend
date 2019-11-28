// React imports
import React, { Component } from "react";
// Start: Styling imports
import "./BusinessDetails.css";
// Other components import
import CommentForm from './CommentForm.js';
import CommentView from './CommentView.js';
import Favorite from './Favorite.js';

class BusinessDetails extends Component {
  render() {
    return (
      <div>
      <br/>
      <h1>Restaurant Name</h1><br/>
      <table>
      <tbody>
      <tr>
          <td width="400px">Image from Yelp</td>
          <td width="700px">
          <br/>
          <h3>Details</h3>
          <table className="inside">
            <tbody>
              <tr>A little table with the details about the vendor : this is to see how long it can get</tr>
            </tbody>
          </table><br/>
          <h3>Reviews</h3>
          <div><table className="inside"><CommentView pageid = "BusinessDetails"/></table></div><br/>
          <h3>Leave Reviews</h3>
          <div><CommentForm pageid = "BusinessDetails"/> </div><br/>
          <h3>Save as Favorite</h3>
          <div><Favorite pageid = "BusinessDetails"/> </div><br/>
          </td>
      </tr>
      </tbody>
      </table>
      </div>
    );
  }
}

export default BusinessDetails;
