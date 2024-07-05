
$(function () { 

    $('#M01').click(function (e) {
        $('html,body').stop().animate({scrollTop:0},600)
        e.preventDefault();
    });
    
    $('#M02').click(function (e) {
        var tt = $('#BBB').offset().top;
        $('html,body').stop().animate({ scrollTop: tt }, 600)
        e.preventDefault();
    });

    $('#M03').click(function (e) {
        var tt = $('#CCC').offset().top;
        $('html,body').stop().animate({ scrollTop: tt }, 600)
        e.preventDefault();
    });

    $('#M04').click(function (e) {
        var tt = $('#DDD').offset().top;
        $('html,body').stop().animate({ scrollTop: tt }, 600)
        e.preventDefault();
    });


})