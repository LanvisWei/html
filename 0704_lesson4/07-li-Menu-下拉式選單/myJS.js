$(function () {
    $('#MENU1').hover(function () {
        $('#SUB1').stop(true,true).slideDown();
    }, function () {
        $('#SUB1').stop(true,true).slideUp();
    });

    $('#MENU2').hover(function () {
        $('#SUB2').slideDown();
    }, function () {
        $('#SUB2').slideUp();
    });

    $('#MENU3').hover(function () {
        $('#SUB3').slideDown();
    }, function () {
        $('#SUB3').slideUp();
    });

    $('#MENU4').hover(function () {
        $('#SUB4').slideDown();
    }, function () {
        $('#SUB4').slideUp();
    });

    $('#MENU5').hover(function () {
        $('#SUB5').slideDown();
    }, function () {
        $('#SUB5').slideUp();
    });
});
