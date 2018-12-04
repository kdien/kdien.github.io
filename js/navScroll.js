$(document).ready(function() {

    $("nav").hide();

    $(function () {
        $(window).scroll(function () {

            if ($(this).scrollTop() > 350)
                $("nav").fadeIn();
            else
                $("nav").fadeOut();
        });
    });
});