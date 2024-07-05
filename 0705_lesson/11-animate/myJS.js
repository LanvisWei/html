$(function () { 

    $('#RRR').click(function () {
        $('#KIDS').stop(true,true).animate({ left: '1000' }, 1000, 'easeOutElastic');
    });


    $('#LLL').click(function () {
        $('#KIDS').stop(true, true).animate({ left: '0' }, 1000, 'easeOutElastic');
    })
})
