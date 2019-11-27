'use strict';
 
const yelp = require('yelp-fusion');
const client = yelp.client('todwN5691CDFypV_P0majG5o06JHuB2hsHFLmlGTqfMFsdv5EBwPGu8QTc_Y5t9CnuDttFVlHvzcwdjvNSMMveEVPaI2GtRcFBIBzuM5XdjrBCNLDXoJMEOLr7bRXXYx');

const getClients = async () => {
    const response =  await client.search({
      term:'coffee',
      location:'berkeley',
      categories:'Food',
      sort_by:'distance',
      open_now:true
    });
    console.log(response);
    const data = await response.jsonBody;
    return data;
}

module.exports.hello = async event => {
    // TODO implement
    const data = await getClients();
    console.log("success")
    const response = {
        statusCode: 200,
        body: data,
        headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,x-requested-with',
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        }
    }
    return response;
};