/**
 * Created by user on 16/10/16.
 */
var movieRating = new MovieRating({_id: "5803e0bcc2fde41a4925bd2f"});
movieRating.fetch({
    success: function (movieRatingResponse) {
        console.log("Found the movie rating: " + movieRatingResponse.get("movie").title);
    }
});