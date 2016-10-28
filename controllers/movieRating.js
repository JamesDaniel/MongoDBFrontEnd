/**
 * Created by user on 13/10/16.
 */
var mongoose = require('mongoose');
var MovieRating = mongoose.model('MovieRating');
exports.findAll = function (req, res) {
    console.log("Server received GET request.");
    MovieRating.find({}, function(err, results) {
        return res.send(results);
    });
};
exports.findById = function (req, res) {
    var id = req.params.id;
    console.log("server received GET request.");
    MovieRating.findOne({'_id':id}, function (err, result) {
        return res.send(result);
    });
};
exports.add = function (req, res) {
    MovieRating.create(req.body, function (err, movieRating) {
        if (err) {
            return console.log(err);
        }
        console.log("server received post request.");
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
        return res.json(req.body);
    })
};
exports.delete = function (req, res) {
    var id = req.params.id;
    console.log("server received delete request.");
    MovieRating.remove({'_id': id}, function (result) {
        return res.json(result);
    });
};