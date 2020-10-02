var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var cors = require('cors');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

var fetch = require('./fetch/fetch');
app.use('/fetch',fetch);

var insert = require('./insert/insert');
app.use('/insert',insert);

var update = require('./update/update');
app.use('/update',update);

var remove = require('./delete/delete');
app.use('/delete',remove);
app.listen('8888',()=>{
    console.log('server running on port no 8888');

});

