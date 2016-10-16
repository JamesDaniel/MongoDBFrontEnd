/**
 * Created by user on 16/10/16.
 */
var MovieRating = Backbone.Model.extend({
    defaults: {
        "user": {
            "id": 0,
            "username": "",
            "age": 0,
            "gender": "",
            "occupation": "",
            "zipCode": ""
        },
        "movie": {
            "title": "",
            "genres": []
        },
        "rating": {
            "stars": 0,
            "timestamp": 0
        }
    },
    idAttribute: '_id',
    initialize: function () {
        console.log('movie rating has been initialized');
        this.on('invalid', function (model, error) {
            console.log("Error initializing movie rating object: " + error);
        });
    },
    constructor: function (attributes, options) {
        console.log('Movie constructor has been called');
        Backbone.Model.apply(this, arguments);
    },
    validate: function (attr) {
        if (!attr.user) {
            return "Invalid MovieRating ID supplied."
        }
    },
    urlRoot: 'http://localhost:3001/movie_rating'
});