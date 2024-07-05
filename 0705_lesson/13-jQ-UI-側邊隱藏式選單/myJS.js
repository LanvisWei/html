$(function () {

    $('#menu').hover(function () {
        $(this).stop(true, false).animate({ left: '0'}, 500)
    }, function () {
        $(this).stop(true, false).animate({ left: '-150' }  , 500);
    })

})