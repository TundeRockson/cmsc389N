var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: 'FWV1UY49qGl4hQGsHRNEV9IwK',
    consumer_secret: 'jGsSZHakhjDtia85jY10t1L6YDQiAQiEergpHIohCAXg0QdweX',
    access_token_key: '1002031248-iDHUgKQANwZydmki25QpbyPwfQkdnVE2qdbTehe',
    access_token_secret: 'Y4ZLu9tNMwkWzuMBPSQ6pZy4dmidF8myGMDDoql538zpO'
});

let searchParam = {id:'1253489042668175361' };
client.get('statuses/lookup', searchParam, function(error,data,response){
    if(error){
        console.log('Not good');
    }else{
        let tweetJSON = data[0];
        console.log(tweetJSON.user);
    }

})


