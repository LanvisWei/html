$(function () { 
    $('.BANNER').hover(function () { 
        $(this).find('.BOX').stop().slideDown(300);
    }, function () {
        $(this).find('.BOX').stop().slideUp(300);    
     })
})