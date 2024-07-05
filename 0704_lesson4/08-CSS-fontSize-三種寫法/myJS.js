$(function () {
    var N = 16; // 將變數N放在所有jQuery函數之外

    $('#BBB').click(function () {
        N = N + 1;
        $('#CON_BOX').css({
            'font-size': N + 'px', 'color': '#333333'
        });
    });

    $('#MMM').click(function () {
        N = 16; // 重置N
        $('#CON_BOX').css({ 'font-size': '16px' });
    });

    $('#SSS').click(function () {
        N = N - 1;
        $('#CON_BOX').css({
            'font-size': N + 'px', 'color': '#333333'
        });
    });
});
