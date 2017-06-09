var page = $("html, body");
var lastScrollTop = 0;

$(".btn").on("click touchend", function(event) {
    $(this).addClass("activeBtn");
    $(this).removeClass("inactiveBtn");
    $(".btn").not(this).removeClass("activeBtn");  //remove "active" class from all nav-pills other than the one clicked


    if (event.type === "touchend") {
        setTimeout(function() {
            $(this).removeClass("activeBtn");
            $("#about_button").addClass("activeBtn");
        }, 1000);
    }

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


$(window).on({'touchmove': function(e) {
        $("#about_button").attr("class", "btn activeBtn");
        $("#portfolio_button").attr("class", "btn inactiveBtn");
        $("#contact_button").attr("class", "btn inactiveBtn");
    }
});

function isElementInViewport (el) {
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= -20
    );
}



var touch = 'ontouchstart' in document.documentElement
    || navigator.maxTouchPoints > 0
    || navigator.msMaxTouchPoints > 0;

if (touch) { // remove all :hover stylesheets
    try { // prevent exception on browsers not supporting DOM styleSheets properly
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}
