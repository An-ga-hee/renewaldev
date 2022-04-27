
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
