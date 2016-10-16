var movieRating = new MovieRating({ _id: "5803e0bcc2fde41a4925bd2f"});
movieRating.fetch({
    success: function (movieRatingResponse) {
        console.log("Found the movieRating: " + movieRatingResponse.get("movie"));

        movieRatingResponse.set("movie", "updated movie to a string");
        movieRatingResponse.save({}, {
            success: function (model, response, options) {
                console.log("The model has been updated to the server");
            },
            error : function (model, xhr, options) {
                console.log("Something went wrong while updating the model: " + JSON.stringify(model));
            }
        });
    }
});