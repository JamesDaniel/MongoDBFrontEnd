/**
 * Created by user on 13/10/16.
 */
var mongoose = require('mongoose');
var MovieRating = mongoose.model('MovieRating');
exports.findAll = function (req, res) {
    MovieRating.find({}, function(err, results) {
        return res.send(results);
    });
};
exports.findById = function (req, res) {
    var id = req.params.id;
    MovieRating.findOne({'_id':id}, function (err, result) {
        return res.send(result);
    });
};
exports.add = function (req, res) {
    MovieRating.create(req.body, function (err, movieRating) {
        if (err) {
            return console.log(err);
        }
        return res.send(movieRating);
    })
};
exports.update = function (req, res) {
    var id = req.params.id;
    var updates = req.body;

    MovieRating.update({"_id":id}, req.body,
    function (err, numberAffected) {
        if (err) {
            return console.log(err);
        }
        console.log("Updated %d movie ratings.", numberAffected.n);
        return res.sendStatus(202);
    })
};
exports.delete = function (req, res) {
    var id = req.params.id;
    var rev = req.params.rev;
    MovieRating.remove({'_id': id, '__v': rev}, function (result) {
        return res.send(result);
    })
};