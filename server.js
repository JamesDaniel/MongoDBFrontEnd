var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var config = require('config');

var appPort = config.get('MovieRating.appConfig.port');
var host = config.get('MovieRating.dbConfig.host');
var dbPort = config.get('MovieRating.dbConfig.port');
var dbName = config.get('MovieRating.dbConfig.dbName');
var mongoUri = 'mongodb://' + host + ':' + dbPort + '/' + dbName;
mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', function () {
    throw new Error('unable to connect to database at ' + mongoUri);
    console.log('database error');
});

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

require('./models/movie_rating');
require('./routes')(app);

app.listen(appPort);
console.log('server running');