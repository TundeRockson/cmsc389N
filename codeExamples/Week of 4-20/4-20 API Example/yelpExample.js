
const yelp = require('yelp-fusion');

const apiKey = 'UL7nV_SQAaUWXugcFXZiwcBwljRTQvE4YJ3oWYgrVUjJaZGLAhy7Z41PJ5tsEZgjFUeewWO_S37Vwdm_irmS7hF5F1Dp8cgMuYTSXLR3TiVgWCw2HFgBt28fAV2mXnYx';
const client = yelp.client(apiKey);

let searchParams = {term: 'Bob\'s Shanghai 66', location: 'rockville, md'}
client.search(searchParams).then((response) => {
    console.log(response.jsonBody.businesses[0].name)
}).catch(
    e => { console.log(e);});