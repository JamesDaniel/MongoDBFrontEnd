/**
 * Created by user on 13/10/16.
 */
module.exports = function (app) {
    var webPages = require('./controllers/webPages');
    var forumPost = require('./controllers/forumPost');
    app.get('/', webPages.index);
    app.get('/forum_post', forumPost.findAll);
    app.get('/forum_post/:id', forumPost.findById);
    app.get('/import', forumPost.import);
    app.post('/forum_post', forumPost.add);
    app.put('/forum_post/:id', forumPost.update);
    app.delete('/forum_post/:id/:rev', forumPost.delete);
}