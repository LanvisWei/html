$(function () {
    $("header h3").on("touchend click", show);

    function show(event) {
        $("nav").animate({ left: "0" }, 300);
        $("section").on("touchend click", hide);
        event.preventDefault();
    }

    function hide(event) {
        $("nav").animate({ left: "-180" }, 300);
        $("section").off("touchend click");
        event.preventDefault();
    }
});
