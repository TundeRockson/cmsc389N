var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: 'FWV1UY49qGl4hQGsHRNEV9IwK',
    consumer_secret: 'jGsSZHakhjDtia85jY10t1L6YDQiAQiEergpHIohCAXg0QdweX',
    access_token_key: '1002031248-iDHUgKQANwZydmki25QpbyPwfQkdnVE2qdbTehe',
    access_token_secret: 'Y4ZLu9tNMwkWzuMBPSQ6pZy4dmidF8myGMDDoql538zpO'
});


//print the text from each tweet

//JSON
//field for statuses
//array inside
//each array entry is a JSON
//each entry has a 'text' field

let searchParam = {q:'mufc', count:50 };
client.get('search/tweets', searchParam, function(error,data,response){
    if(error){
        console.log(error);
    }else{
        let statuses= data.statuses;
        for(let i=0; i<statuses.length; i++){
            let text = statuses[i].text;
            console.log(text);
        }
    }

})