/**
 * Created by user on 16/10/16.
 */
var movieRating = new MovieRating({ _id: "5803e100c2fde41a4925bd30"});
movieRating.destroy({
    success: function (model, response, options) {
        console.log("The model has been deleted from the server.");
    },
    error: function (model, xhr, options) {
        console.log("Something went wrong while deleting the model");
    }
});