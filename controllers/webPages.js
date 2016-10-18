/**
 * Created by user on 13/10/16.
 */
exports.index = function (req, res) {
    res.sendFile('create.html', {root: __dirname + '/../public'});
}