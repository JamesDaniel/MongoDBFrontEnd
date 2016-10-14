/**
 * Created by user on 13/10/16.
 */
var Mongoose = require('mongoose');
Schema = Mongoose.Schema;

var ForumPostSchema = new Schema({
    username: String,
    fname: String,
    lname: String
});

Mongoose.model('ForumPost', ForumPostSchema);