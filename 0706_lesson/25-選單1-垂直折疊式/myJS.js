$(function () {
    $(".box h3").on("touchend click", show);

    function show(event) {
        $(this).siblings(".content").slideToggle(300);
        $(this).parent().siblings().find(".content").slideUp(300);
        event.preventDefault();
    }
});
