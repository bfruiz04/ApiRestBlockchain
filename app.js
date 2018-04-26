//use express 

var express = require('express'),
app = express(),
port = process.env.PORT || 3003,

mongoose = require('mongoose'),
//created model loading here
Task = require('./apiblockchain/model/modelPerson'), 
bodyParser = require('body-parser');

// dbconnection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/db_person');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// import route
var routes = require('./apiblockchain/router/routesPerson'); 
 //register the route
routes(app);


app.listen(port);


console.log('Server Run ON ' + port);