$(document).ready(function() {

    $("a.nav-link").on("click", function(event) {
  
        if (this.hash !== "") {

            event.preventDefault();
    
            var target = $(this).attr("href");
            var scrollToPosition = $(target).offset().top - 70;
    
            $("html").animate({"scrollTop": scrollToPosition}, 800, function() {
                window.location.hash = target;
                $("html").animate({"scrollTop": scrollToPosition}, 0);
                history.pushState("", document.title, window.location.pathname + window.location.search);
            });
        }
    });
});