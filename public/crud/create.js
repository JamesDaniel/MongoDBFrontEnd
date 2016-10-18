/**
 * Created by user on 16/10/16.
 */

$(document).ready(function () {
    $("#saveButton").click(function () {
alert('clicked save');
        var movieRating = new MovieRating({
            "user": {
                "id": $('#id').val(),
                "username": $('#username').val(),
                "age": parseInt($('#age').val()),
                "gender": $('#gender').val(),
                "occupation": $('#occupation').val(),
                "zipCode": $('#zipCode').val()
            },
            "movie": {
                "title": $('#title').val(),
                "genres": [$('#genres').val()]
            },
            "rating": {
                "stars": parseInt($('#stars').val()),
                "timestamp": parseInt($('#timestamp').val())
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
    });
});
