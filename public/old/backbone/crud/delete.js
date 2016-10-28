/**
 * Created by user on 16/10/16.
 */
var movieRating = new MovieRating({ _id: "5804d27a06bc7c0fb7620019"});
movieRating.destroy({
    success: function (model, response, options) {
        console.log("The model has been deleted from the server.");
    },
    error: function (model, xhr, options) {
        console.log("Something went wrong while deleting the model");
    }
});