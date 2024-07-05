$(function () { 
    $('.main').hover(function () {
        $(this).stop().animate({top:-280},500,'')
    }, function () {
        $(this).stop().animate({ top: 0 }, 500, '')
     });
})