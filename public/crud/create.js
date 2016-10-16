/**
 * Created by user on 16/10/16.
 */
var movieRating = new MovieRating({
    "user": {
        "id": 1,
        "username": "Peter",
        "age": 23,
        "gender": "M",
        "occupation": "artist",
        "zipCode": "0125364"
    },
    "movie": {
        "title": "James got 200% on his MongoDB Portfolio",
        "genres": ["action", "adventure"]
    },
    "rating": {
        "stars": 5,
        "timestamp": 120365148
    }
});
movieRating.save({}, {
    success: function (model, response, options) {
        console.log("The model has been saved to the server.");
    },
    error: function (model, xhr, options) {
        console.log("Something went wront while saving the model.");
    }
});