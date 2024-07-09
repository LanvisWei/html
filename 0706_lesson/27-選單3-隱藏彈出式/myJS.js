$(function () {
    $("header h3").on("touchend click", show);

    function show(event) {
        $("nav").removeClass("CLOSE").addClass("OPEN");
        $("nav h3").on("touchend click", hide);
        event.preventDefault();
    }

    function hide(event) {
        $("nav").removeClass("OPEN").addClass("CLOSE");
        $("nav h3").off("touchend click");
        event.preventDefault();
    }
});
