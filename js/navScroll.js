$(document).ready(function() {

    $("nav").hide();

    $(function () {
        $(window).scroll(function () {

            if ($(this).scrollTop() > 350)
                $("nav").slideDown();
            else
                $("nav").slideUp();
        });
    });
});