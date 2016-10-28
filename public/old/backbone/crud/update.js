var movieRating = new MovieRating({ _id: "5804d27a06bc7c0fb7620019"});
movieRating.fetch({
    success: function (movieRatingResponse) {
        console.log("Found the movieRating: " + movieRatingResponse.get("movie"));

        movieRatingResponse.set("movie", "updated movie to a string");
        movieRatingResponse.save({}, {
            success: function (model, response, options) {
                console.log("The model has been updated to the server");
            },
            error : function (model, xhr, options) {
                console.log("Something went wrong while updating the model: " + JSON.stringify(xhr));
            }
        });
    }
});