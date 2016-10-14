/**
 * Created by user on 13/10/16.
 */
var mongoose = require('mongoose');
var ForumPost = mongoose.model('ForumPost');
exports.findAll = function (req, res) {
    ForumPost.find({}, function(err, results) {
        return res.send(results);
    });
    //res.send('got all');
};
exports.findById = function (req, res) {
    res.send('got it by id');
};
exports.add = function (req, res) {
    res.send('added one');
};
exports.update = function (req, res) {
    res.send('update one');
};
exports.delete = function (req, res) {
    res.send('deleted one');
};