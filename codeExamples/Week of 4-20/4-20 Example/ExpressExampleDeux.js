const express = require('express');
const server = express();

let dealership = [
    {brand: "Hyundai", model: "Veloster_N", year: 2020}
    ,{brand: "Lexus", model: "Golf_R", year: 2017}
    ,{brand: "Ford", model: "Focus_RS", year: 2018}
];

// '/api/dealership/0'
// '/api/dealership/1'
// '/api/dealership/2'

// server.get('/api/dealership/:count', function(req,res){
//     if (req.params.count < dealership.length) {
//         res.send('You selected a ' + dealership[req.params.count]);
//     } else {
//         res.status(404).send('Nosirskiiii! 404 Entry Not Found')
//     }
    

// })

server.get('/api/dealership/:year/:brand/:model', function(req,res){ //Specific year, brand, model
    let result = dealership.find(function(val) {
        return (val.year === parseInt(req.params.year)) && //gotta convert the strings into integers
            (val.brand === req.params.brand) && 
            (val.model === req.params.model); 
    })
    if (!result) { // if nothing got assigned to result since the year you entered isn't in the list, print 404
    res.status(404).send('Nosirskiiii! 404 Entry Not Found')
    } else {
        res.send("Results: " + result.year + ' ' + result.brand + ' ' + result.model);
    }
})




server.get('/api/dealership/', function(req,res){
    let dealershipString = '';
    for (let i = 0; i < dealership.length; i++) {
        dealershipString = dealershipString + dealership[i].year + ' ' + dealership[i].brand + ' ' + dealership[i].model + '\n';
    }
    res.send(dealershipString);
})

server.listen(3000, ()=>{
    console.log("Connected to port 3000!");
});