'use strict';

const yelp = require('yelp-fusion');
const client = yelp.client('todwN5691CDFypV_P0majG5o06JHuB2hsHFLmlGTqfMFsdv5EBwPGu8QTc_Y5t9CnuDttFVlHvzcwdjvNSMMveEVPaI2GtRcFBIBzuM5XdjrBCNLDXoJMEOLr7bRXXYx');

const default_headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,x-requested-with',
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
}

const getClients = async (event) => {
    let data = {}
    if (event.queryStringParameters != null) {
        const response = await client.search({
            term: event.queryStringParameters['term'],
            location: event.queryStringParameters['location'],
            categories: event.queryStringParameters['categories'],
            sort_by: event.queryStringParameters['sort_by'],
            open_now: event.queryStringParameters['open_now']
        });
        data = await response.jsonBody;
    }
    return data;
}

const getBusinessDetail = async (event) => {
    let data = {}
    if (event.queryStringParameters != null) {
        const response = await client.business(event.queryStringParameters['business_id']);
        data = await response.jsonBody;
    }
    return data;
}

const getBusinessReviews = async (event) => {
    let data = {}
    if (event.queryStringParameters != null) {
        const response = await client.reviews(event.queryStringParameters['business_id']);
        data = await response.jsonBody;
    }
    return data;
}

const getEvents = async (event) => {
    let data = {}
    if (event.queryStringParameters != null) {
        const response = await client.eventSearch({categories: event.queryStringParameters['categories'], location: event.queryStringParameters['location']});
        data = await response.jsonBody;
    }
    return data;
}

module.exports.search = async (event, context) => {
    // TODO implement
    const data = await getClients(event);
    const response = {
        statusCode: 200,
        body: JSON.stringify(data),
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,x-requested-with',
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        }
    }
    return response;
};

module.exports.businessDetail = async (event, context) => {
    // TODO implement
    const data = await getBusinessDetail(event);
    const response = {
        statusCode: 200,
        body: JSON.stringify(data),
        headers: default_headers
    }
    return response;
};

module.exports.businessReview = async (event, context) => {
    // TODO implement
    const data = await getBusinessReviews(event);
    const response = {
        statusCode: 200,
        body: JSON.stringify(data),
        headers: default_headers
    }
    return response;
};

module.exports.eventSearch = async (event, context) => {
    // TODO implement
    const data = await getEvents(event);
    const response = {
        statusCode: 200,
        body: JSON.stringify(data),
        headers: default_headers
    }
    return response;
};