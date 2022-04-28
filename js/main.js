/* header */
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) {
            $("header").css("backgroundColor", "#000000e6")
        } else {
            $("header").css("backgroundColor", "transparent");
        }
    })
});

/* top-btn scroll */
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('#top-btn').fadeIn();
        } else {
            $('#top-btn').fadeOut();
        }
    });

    $("#top-btn").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 200);
        return false;
    });
});