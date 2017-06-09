var page = $("html, body");

$(".btn").click(function() {
    $(this).addClass("activeBtn");
    $(".btn").not(this).removeClass("activeBtn");  //remove "active" class from all nav-pills other than the one clicked

    if (this.id === "portfolio_button") {
        page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
            page.stop();
        });
        page.animate({ scrollTop: $(".portfolio").offset().top }, 'slow', function(){
            page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
        });
    }
    else if (this.id === "contact_button") {
        page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
            page.stop();
        });
        page.animate({ scrollTop: $(".contact").offset().top }, 'slow', function(){
            page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
        });
    }
});

var lastScrollTop = 0;
$(window).scroll(function(event){
    var st = $(this).scrollTop();
    if (st <= lastScrollTop){
        if (isElementInViewport(document.getElementById("about_button"))) {
            $("#about_button").attr("class", "btn activeBtn");
            $("#portfolio_button").removeClass("activeBtn");
            $("#contact_button").removeClass("activeBtn");
        }
    }
    lastScrollTop = st;
});

function isElementInViewport (el) {
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= -20 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}
