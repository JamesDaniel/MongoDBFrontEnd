/**
 * Created by user on 13/10/16.
 */
module.exports = function (app) {
    var webPages = require('./controllers/webPages');
    var movieRating = require('./controllers/movieRating');
    app.get('/', webPages.index);
    app.get('/movie_rating', movieRating.findAll);
    app.get('/movie_rating/:id', movieRating.findById);
    app.post('/movie_rating', movieRating.add);
    app.put('/movie_rating/:id', movieRating.update);
    app.delete('/movie_rating/:id/:rev', movieRating.delete);
}