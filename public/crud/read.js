/**
 * Created by user on 16/10/16.
 */
$(document).ready(function () {

    $('#getMovieRating').click(function () {
        var movieRating = new MovieRating({_id: $('#documentId').val()});
        movieRating.fetch({
            success: function (movieRatingResponse) {
                console.log("Found the movie rating: " + JSON.stringify(movieRatingResponse));
                $('#id').html("User ID: " + movieRatingResponse.get("user").id);
                $('#username').html("username: " + movieRatingResponse.get("user").username);
                $('#age').html("age: " + movieRatingResponse.get("user").age);
                $('#gender').html("gender: " + movieRatingResponse.get("user").gender);
                $('#occupation').html("occupation: " + movieRatingResponse.get("user").occupation);
                $('#zipCode').html("zip code: " + movieRatingResponse.get("user").zipCode);
                $('#title').html("Movie title: " + movieRatingResponse.get("movie").title);
                $('#genres').html("Genres: " + movieRatingResponse.get("movie").genres);
                $('#stars').html("Stars: " + movieRatingResponse.get("rating").stars);
                $('#timestamp').html("Timestamp: " + movieRatingResponse.get("rating").timestamp);

            },
            error: function () {
                alert('didn\'t work');
            }
        });
    });

});
