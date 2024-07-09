$(function () {
    $('#MENU li').hover(function () {
        $(this).stop().animate({ top: 0 }, 500);
        $(this).siblings().stop().animate({ top: 50 }, 500);
    }, function () {
        $(this).stop().animate({ top: 100 }, 500);
    })
})