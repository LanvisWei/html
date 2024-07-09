$(function () {
    $(".small img").click(function () {
        var N = $(this).index();
        $(".big img").eq(N).fadeIn(600).siblings().fadeOut(600);
    });
});
