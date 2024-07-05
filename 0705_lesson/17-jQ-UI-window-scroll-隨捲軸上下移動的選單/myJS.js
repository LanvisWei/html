$(function () {
    $(window).scroll(function () {
        var HH = $(window).scrollTop() + 150;
        $('#MENU').stop().animate({ top: HH }, 600);
    });
});
