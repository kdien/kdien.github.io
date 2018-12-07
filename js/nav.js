$(document).ready(function() {

    /******************** Hide and show navbar ********************/
    $("nav").hide();

    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 350)
                $("nav").slideDown();
            else
                $("nav").slideUp();
        });
    });
    /**************************************************************/


    /******************** Navbar's smooth scroll ********************/
    $("a.nav-link").on("click", function(event) {
  
        if (this.hash !== "") {

            event.preventDefault();
    
            var target = $(this).attr("href");
            var scrollToPosition = $(target).offset().top - 70;
    
            $("html, body").animate({"scrollTop": scrollToPosition}, 800, function() {
                window.location.hash = target;
                $("html, body").animate({"scrollTop": scrollToPosition}, 0);
                
                // Remove hash from URL on address bar
                history.pushState("", document.title, window.location.pathname + window.location.search);
            });
        }
    });
    /****************************************************************/
});