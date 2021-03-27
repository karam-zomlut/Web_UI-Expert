$(function () {
    // Play Video.
    $('.play-vid').click(function (e) { 
        e.preventDefault();
        $('.video-player').addClass('active');
    });
    // Close Video
    $('.close-vid').click(function (e) { 
        e.preventDefault();
        $('.video-player').removeClass('active');
    });

    // Counter
    $('.success-box .num').counterUp({
        delay: 10,
        time: 1100
    })
});