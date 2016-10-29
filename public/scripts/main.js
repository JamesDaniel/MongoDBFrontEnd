/**
 * Created by user on 28/10/16.
 */

$(document).ready(function () {

    $('#submitCreate').click(function () {
        crud.create();
    });
    $('#submitRead').click(function () {
        crud.read();
    });
    $('#submitUpdate').click(function () {
        crud.update();
    });
    $('#submitDelete').click(function () {
        crud.destroy();
    });
    $('#submitMapReduce').click(function () {
        crud.mapReduce();
    });
});
