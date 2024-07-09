$(function () {
    $(".BANNER").click(function () {
        $(this).find(".BOX").slideDown(300).end().siblings().find(".BOX").slideUp(300);
    });
});
