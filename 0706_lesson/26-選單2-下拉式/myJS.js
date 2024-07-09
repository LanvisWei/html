$(function () {
    $("header h3").on("touchend click", show);

    function show(event) {
        $("header nav").slideToggle(300);
        $("section").on("touchend click", hide);
        event.preventDefault();
    }

    function hide(event) {
        $("header nav").slideUp(300);
        $("section").off("touchend click");
        event.preventDefault();
    }
});
