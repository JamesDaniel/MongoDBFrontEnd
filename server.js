var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var fs = require('fs');

var mongoUri = 'mongodb://localhost:27017/movie_rating';
mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', function () {
    throw new Error('unable to connect to database at ' + mongoUri);
    console.log('database error');
});

var app = express();

app.use(bodyParser());

require('./models/movie_rating');
require('./routes')(app);

app.listen(3001);
console.log('server running');