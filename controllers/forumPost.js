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
    var id = req.params.id;
    ForumPost.findOne({'_id':id}, function (err, result) {
        return res.send(result);
    });
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
exports.import = function (req, res) {
    ForumPost.create(
        {
            username: "John_Doh",
            fname: "John",
            lname: "Doh"
        },
        function (err) {
            if (err) {
                return console.log(err);
            }
            return res.send(202);
        }
    )
}