var express = require("express");
var mongodb = require("mongodb");
var router = express.Router();

var MongoClient = mongodb.MongoClient;

router.get("/",(req,res)=>{
    MongoClient.connect("mongodb://localhost:27017/crud",(err,db)=>{ 
        db.collection("students").find().toArray((result)=>{
                                    console.log('successfully fetched the data')
                                    res.send(result);
                                });
    });
});
console.log('now its working')
module.exports = router; 