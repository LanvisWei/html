
$(window).scroll(function () {
    var HH = $(window).scrollTop();
    if (HH < 100) {
        $('#top-bar').stop().animate({ top: '-65px' });
    };
    if (HH > 100) {
        $('#top-bar').stop().animate({ top: '0px' })
    };
    
})