/**
 * Created by user on 17/10/16.
 */
var MovieRatingView = Backbone.View.extend({
    initialize: function(){
        alert("Alerts suck.");
    },
    render: function(){
        // Compile the template using underscore
        var template = _.template( '<p>hello template</p>', {} );
        // Load the compiled HTML into the Backbone "el"
        this.$el.html( template );
    }
});
var movieRatingView = new MovieRatingView({el: $('#create_container')});