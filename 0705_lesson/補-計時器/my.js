$(function () {

    var N = 1;

    setInterval(aaa, 2000)

    function aaa() {

        if (N < 6) {

            N = N + 1;

        } else {

            N = 1;

        }

        $('#car').attr('src', './img/0' + N + '.jpg')

    }

})