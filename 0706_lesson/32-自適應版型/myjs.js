$(function () {
    $(".header h3").on("touchend click", function (event) {
        $(".header ul").toggleClass("show");
        event.preventDefault();
    });
});
