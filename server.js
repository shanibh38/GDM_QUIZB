//Server class - responsible about initiate connections
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var util = require('util')
var cors = require('cors');
app.use(cors());
//var DButilsAzure = require('./DButils');
var Users = require('./server/Users');
var jwt = require('jsonwebtoken');

const PORT = process.env.PORT || 3001;
var server = app.listen(PORT, function () {
    var host = server.address().address;
    var port = server.address().PORT;
    console.log("Example app listening at http://%s:%s",host, port);
    });

app.use('/Users',Users);
app.use(express.static(__dirname + '/client'));