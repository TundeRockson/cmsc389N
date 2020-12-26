/******************************************DROPPING THIS PROJECT: ONLY DID PART 1******************************************/
var Twitter = require('twitter');
const express = require('express');
const server = express();

var client = new Twitter({
    consumer_key: 'FWV1UY49qGl4hQGsHRNEV9IwK',
    consumer_secret: 'jGsSZHakhjDtia85jY10t1L6YDQiAQiEergpHIohCAXg0QdweX',
    access_token_key: '1002031248-iDHUgKQANwZydmki25QpbyPwfQkdnVE2qdbTehe',
    access_token_secret: 'Y4ZLu9tNMwkWzuMBPSQ6pZy4dmidF8myGMDDoql538zpO'
});



server.get('/api/tweets/:data', function(req,res){ 
    if(req.params.data) {
        let searchParam = {q:req.params.data, count:50};
        client.get('search/tweets', searchParam, function(error,data,response){
        if(error){
            console.log(error);
        }else{
            let statuses= data.statuses;
            let answer = [];
            for(let i=0; i<statuses.length; i++){
                let text = statuses[i].text;
                console.log(text);
                answer.push('TWEET ' + (i+1) + ': ' + text);
            }
                let finalAnswer = answer.join("<br/>")
                res.send(finalAnswer);
            
            
        }
        })
    } else {
        res.status(404).send('404 Entry Not Found');
        return;
    }
    
    
})




server.listen(5000, ()=>{
    console.log("Connected to port 5000!");
});