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
    Data.find(function(err,data){
        if(err){
            return res.json({success: false, error:err});
        }else{
            return res.json({success:true, info: data})
        }
    });
    
});

//Post handler
router.post('/', function (req, res, next) {
    let p = new Data();
    p.name = req.body.name;
    p.position = req.body.position;
    p.age = req.body.age;
    p.nationality = req.body.nationality;
    p.save((err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});


//Delete
router.delete('/', function (req, res, next) {
    Data.findOneAndRemove({name: req.body.name}, (err)=>{
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });

});

//Change
router.put('/', function (req, res, next) {
    Data.updateOne({name: req.body.name}, {age: req.body.age}, (err)=>{
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });

});




module.exports = router;
