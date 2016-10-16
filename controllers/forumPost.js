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
    ForumPost.create(req.body, function (err, forumPost) {
        if (err) {
            return console.log(err);
        }
        return res.send(forumPost);
    })
};
exports.update = function (req, res) {
    var id = req.params.id;
    var updates = req.body;

    ForumPost.update({"_id":id}, req.body,
    function (err, numberAffected) {
        if (err) {
            return console.log(err);
        }
        console.log("Updated %d forum post", numberAffected.n);
        return res.sendStatus(202);
    })
};
exports.delete = function (req, res) {
    var id = req.params.id;
    var rev = req.params.rev;
    ForumPost.remove({'_id': id, '__v': rev}, function (result) {
        return res.send(result);
    })
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
            return res.sendStatus(202);
        }
    )
}