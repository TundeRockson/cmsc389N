var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');//*
const Data = require('./data');//*


const dbRoute =
    'mongodb+srv://tunderockson:Manchester7@cluster0-qbckc.mongodb.net/test?retryWrites=true&w=majority';//*
mongoose.connect(dbRoute, { useNewUrlParser: true });//*
let db = mongoose.connection;//*

db.once('open', () => console.log('connected to the database'));//*

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));//*


/* GET users listing. */
router.get('/', function (req, res, next) {
    
    
});

//Post handler
router.post('/', function (req, res, next) {
    
});

//Delete
router.delete('/', function (req, res, next) {
    

});

//Change
router.put('/', function (req, res, next) {

});




module.exports = router;
