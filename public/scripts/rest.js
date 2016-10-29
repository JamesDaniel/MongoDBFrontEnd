/**
 * Created by user on 28/10/16.
 */
var rest = (function () {

    function POSTError () {
        console.log("There was a problem accessing a POST rest end point.");
    };
    function GETError () {
        console.log("There was a problem accessing a GET rest end point.");
    };
    function PUTError () {
        console.log("There was a problem accessing a PUT rest end point.");
    };
    function DELETEError () {
        console.log("There was a problem accessing a DELETE rest end point.");
    };




    var post = function (url, data, success) {
        $.ajax({
            url: url,
            type: "POST",
            data: data,
            success: success,
            error: POSTError
        })
    };
    var get = function (url, success) {
        $.ajax({
            url: url,
            type: 'GET',
            success: success,
            error: GETError
        })
    };
    var put = function (url, data, success) {
        $.ajax({
            url: url,
            type: 'PUT',
            data: data,
            success: success,
            error: PUTError
        });
    };
    var destroy = function (url, success) {
        $.ajax({
            url: url,
            type: 'DELETE',
            success: success,
            error: DELETEError
        });
    };



    return {
        post: post,
        get: get,
        put: put,
        destroy: destroy
    }
}());