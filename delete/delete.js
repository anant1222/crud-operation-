var express = require('express');
var mongodb = require('mongodb');
var router = express.Router();
var MongoClient = mongodb.MongoClient;

router.post('/',(req,res)=>{
    var e_id = req.body.e_id;

    var obj = { "e_id":e_id};

    MongoClient.connect('mongodb://localhost:27017/crud',
    (err,db)=>{
        db.collection('students').deleteOne(obj,
             (err,result)=>{
                 if(err){
                     res.send({"delete":"fail"});

                 }
                 else{
                     res.send({"delete":"Success"});
                 }
             })
    });
});
module.exports = router; 