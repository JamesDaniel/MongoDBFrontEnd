/**
 * Created by user on 28/10/16.
 */
var crud = (function () {
    var create = function () {
        var success = function (data, status, xhr) {
            console.log("post succeeded");
        };
        rest.post("http://localhost:3001/movie_rating", {
            "user": {
                "id": $('#id').val(),
                "username": $('#username').val(),
                "age": parseInt($('#age').val()),
                "gender": $('#gender').val(),
                "occupation": $('#occupation').val(),
                "zipCode": $('#zipCode').val()
            },
            "movie": {
                "title": $('#title').val(),
                "genres": [$('#genres').val()]
            },
            "rating": {
                "stars": parseInt($('#stars').val()),
                "timestamp": parseInt($('#timestamp').val())
            }
        }, success);
        console.log("create called.");
    };
    var read = function () {
        var success = function (data, status, xhr) {
            $('#id').html("User ID: " + data.user.id);
            $('#username').html("username: " + data.user.username);
            $('#age').html("age: " + data.user.age);
            $('#gender').html("gender: " + data.user.gender);
            $('#occupation').html("occupation: " + data.user.occupation);
            $('#zipCode').html("zip code: " + data.user.zipCode);
            $('#title').html("Movie title: " + data.movie.title);
            $('#genres').html("Genres: " + data.movie.genres);
            $('#stars').html("Stars: " + data.rating.stars);
            $('#timestamp').html("Timestamp: " + data.rating.timestamp);
            console.log("read success");
        };
        rest.get("http://localhost:3001/movie_rating/" + $('#documentId').val(), success);
        console.log("read called.");
    };
    var update = function () {
        var success = function (data, status, xhr) {
            console.log("update succeeded");
        };
        rest.put("http://localhost:3001/movie_rating/" + $('#documentId').val(), {
            "user": {
                "id": $('#id').val(),
                "username": $('#username').val(),
                "age": parseInt($('#age').val()),
                "gender": $('#gender').val(),
                "occupation": $('#occupation').val(),
                "zipCode": $('#zipCode').val()
            },
            "movie": {
                "title": $('#title').val(),
                "genres": [$('#genres').val()]
            },
            "rating": {
                "stars": parseInt($('#stars').val()),
                "timestamp": parseInt($('#timestamp').val())
            }
        }, success);
    };
    var destroy = function () {
        var success = function (data, status, xhr) {
            console.log("delete succeeded");
        };
        rest.destroy("http://localhost:3001/movie_rating/" + $('#documentId').val(), success);
    };
    var mapReduce = function () {
        var success = function (data, status, xhr) {
            $('#content').html("");
            data.forEach(function (entry) {
                $('#content').append("Movie title: " + entry._id + "<br />");
                $('#content').append("Number of ratings: " + entry.value + "<br /><br />");
            });
            console.log("map reduce succeeded");
        };
        rest.get("http://localhost:3001/movie_rating_reduce/map_reduce", success);
        console.log("map reduce called.");
    };

    return {
        create: create,
        read: read,
        update: update,
        destroy: destroy,
        mapReduce: mapReduce
    }
}());
