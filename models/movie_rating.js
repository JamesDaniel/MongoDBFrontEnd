/**
 * Created by user on 13/10/16.
 */
var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var MovieRatingsSchema = new Schema({
    user: {
        id: Number,
        username: String,
        age: Number,
        gender: String,
        occupation: String,
        zipCode: String
    },
    movie: {
        title: String,
        genres: [String]
    },
    rating: {
        stars: Number,
        timestamp: Number
    }
});

Mongoose.model('MovieRating', MovieRatingsSchema);