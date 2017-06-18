var page = $("html, body");
var lastScrollTop = 0;

initializeHeaderMenuButtons();
initializeSortMenuButtons();
initializeProjectButtons();

function initializeProjectButtons() {
    $(".all-projects").click(function() {
        if (this.classList.contains("project1")) {
            $(".carousel-inner").html(
                "<div class='item active'><img src='img/project1/1.jpg' class='d-block img-fluid'> </div> <div class='item'> <img src='img/project1/2.jpg' class='d-block img-fluid'>" +
                "</div><div class='item'><img src='img/project1/3.jpg' class='d-block img-fluid'></div><div class='item'> <img src='img/project1/4.jpg' class='d-block img-fluid'>" +
                "</div><div class='item'><img src='img/project1/5.jpg' class='d-block img-fluid'></div>"
            );

            $(".modal-footer").text("Hey this is the project 1 text I changed it see?");
        }
        else if (this.classList.contains("project2")) {
            $(".carousel-inner").html(
                "<div class='item active'><img src='img/project2/1.jpg' class='d-block img-fluid'></div><div class='item'><img src='img/project2/2.jpg' class='d-block img-fluid'>" +
                "</div><div class='item'><img src='img/project2/3.jpg' class='d-block img-fluid'></div><div class='item'><img src='img/project2/4.jpg' class='d-block img-fluid'></div>"
            );

            $(".modal-footer").text("Hey this is the project 2 text dontcha know?");
        }
        else if (this.classList.contains("project3")) {
            $(".carousel-inner").html(
                "<div class='item active'><img src='img/project3/1.jpg' class='d-block img-fluid'></div><div class='item'><img src='img/project3/2.jpg' class='d-block img-fluid'>" +
                "</div><div class='item'><img src='img/project3/3.jpg' class='d-block img-fluid'></div><div class='item'><img src='img/project3/4.jpg' class='d-block img-fluid'>" +
                "</div><div class='item'><img src='img/project3/5.jpg' class='d-block img-fluid'></div><div class='item'><img src='img/project3/6.jpg' class='d-block img-fluid'>" +
                "</div><div class='item'><img src='img/project3/7.jpg' class='d-block img-fluid'></div><div class='item'><img src='img/project3/8.jpg' class='d-block img-fluid'></div>"
            );

            $(".modal-footer").text("This is project 3 text");
        }
        else if (this.classList.contains("project4")) {
            $(".carousel-inner").html(
                "<div class='item active'><img src='img/project4/1.jpg' class='d-block img-fluid'></div><div class='item'><img src='img/project4/2.jpg' class='d-block img-fluid'>" +
                "</div><div class='item'><img src='img/project4/3.jpg' class='d-block img-fluid'></div><div class='item'><img src='img/project4/4.jpg' class='d-block img-fluid'>" +
                "</div><div class='item'><img src='img/project4/5.jpg' class='d-block img-fluid'></div><div class='item'><img src='img/project4/6.jpg' class='d-block img-fluid'>" +
                "</div><div class='item'><img src='img/project4/7.jpg' class='d-block img-fluid'></div><div class='item'><img src='img/project4/8.jpg' class='d-block img-fluid'></div>"
            );

            $(".modal-footer").text("And here's project 4 text");
        }

        else if (this.classList.contains("project5")) {
            $(".carousel-inner").html(
                "<div class='item active'><img src='img/project5/1.jpg' class='d-block img-fluid'></div><div class='item'><img src='img/project5/2.jpg' class='d-block img-fluid'>" +
                "</div><div class='item'><img src='img/project5/3.jpg' class='d-block img-fluid'></div><div class='item'><img src='img/project5/4.jpg' class='d-block img-fluid'>" +
                "</div><div class='item'><img src='img/project5/5.jpg' class='d-block img-fluid'></div><div class='item'><img src='img/project5/6.jpg' class='d-block img-fluid'></div>"
            );

            $(".modal-footer").text("And here's project 5 text");
        }

        $('#myModal').modal("show");
    });
}



function initializeSortMenuButtons() {
    $(".sortBtn").on("click", function() {
        console.log("click");
        $(".sortBtn").not(this).removeClass("sortBtnActive");
        $(this).addClass("sortBtnActive");
    });

    $(".all-button").click(function() {
        var allProjects = $(".all-projects");
        allProjects.css("display", "none");
        allProjects.fadeIn( "slow");
    });

    $(".web-button").click(function() {
        $(".all-projects").css("display", "none");
        $(".web-projects").fadeIn( "slow");

    });

    $(".android-button").click(function() {
        $(".all-projects").css("display", "none");
        $(".android-projects").fadeIn( "slow");

    });

    $(".other-button").click(function() {
        $(".all-projects").css("display", "none");
        $(".other-projects").fadeIn( "slow");

    });
}








function initializeHeaderMenuButtons () {

    $(".btn").on("click touchend", function (event) {
        $(this).addClass("activeBtn");
        $(this).removeClass("inactiveBtn");
        $(".btn").not(this).removeClass("activeBtn");  //remove "active" class from all nav-pills other than the one clicked


        if (event.type === "touchend") {
            setTimeout(function () {
                $(this).removeClass("activeBtn");
                $("#about_button").addClass("activeBtn");
            }, 1000);
        }

        if (this.id === "portfolio_button") {
            page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function () {
                page.stop();
            });
            page.animate({scrollTop: $(".portfolio").offset().top}, 'slow', function () {
                page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
            });
        }
        else if (this.id === "contact_button") {
            page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function () {
                page.stop();
            });
            page.animate({scrollTop: $(".contact").offset().top}, 'slow', function () {
                page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
            });
        }
    });


    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        if (st <= lastScrollTop) {
            if (isElementInViewport(document.getElementById("about_button"))) {
                $("#about_button").attr("class", "btn activeBtn");
                $("#portfolio_button").removeClass("activeBtn");
                $("#contact_button").removeClass("activeBtn");
            }
        }
        lastScrollTop = st;
    });


    $(window).on({
        'touchmove': function (e) {
            $("#about_button").attr("class", "btn activeBtn");
            $("#portfolio_button").attr("class", "btn inactiveBtn");
            $("#contact_button").attr("class", "btn inactiveBtn");
        }
    });

    function isElementInViewport(el) {
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
        } catch (ex) {
        }
    }

}
