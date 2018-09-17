var page = $("html, body");
var lastScrollTop = 0;

initializeHeaderMenuButtons();
initializeSortMenuButtons();
initializeProjectButtons();


//Preloads images in the carousels so they're hopefully ready when the user wants to see them. This must come before we call the function below.
$.preload = function() {
    for (var i = 0; i < arguments.length; i++) {
        $("<img />").attr("src", arguments[i]);
    }
};

$.preload("img/project2/1.jpg", "img/project2/2.jpg", "img/project2/3.jpg", "img/project2/4.jpg",
    "img/project3/1.jpg", "img/project3/2.jpg", "img/project3/3.jpg", "img/project3/4.jpg", "img/project3/5.jpg", "img/project3/6.jpg", "img/project3/7.jpg", "img/project3/8.jpg",
    "img/project4/1.jpg", "img/project4/2.jpg", "img/project4/3.jpg", "img/project4/4.jpg", "img/project4/5.jpg", "img/project4/6.jpg", "img/project4/7.jpg", "img/project4/8.jpg", "img/project4/9.jpg", "img/project4/10.jpg",
    "img/project5/1.jpg", "img/project5/2.jpg", "img/project5/3.jpg", "img/project5/4.jpg", "img/project5/5.jpg", "img/project5/6.jpg"
);




function initializeProjectButtons() {
    $(".all-projects").click(function() {
        if (this.classList.contains("project1")) {
            $(".carousel-inner").html(
                "<div class='item active'><img src='img/project1/1.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>" +
                "<div class='item'><img src='img/project1/2.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>" +
                "<div class='item'><img src='img/project1/3.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>" +
                "<div class='item'><img src='img/project1/4.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>" +
                "<div class='item'><img src='img/project1/5.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>" +
                "<div class='item'><img src='img/project1/6.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>" +
                "<div class='item'><img src='img/project1/7.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>" +
                "<div class='item'><img src='img/project1/8.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>"
            );

            $(".modal-footer").html("<div class='modal-title'>Delivery Tip Tracker<br>Pro version: <a href='http://goo.gl/KD2y1t' target='_blank'>goo.gl/KD2y1t</a> &nbsp;| &nbsp;Free version: <a href='https://goo.gl/E8xff3' target='_blank'>goo.gl/E8xff3</a></div>" +
                "Delivery Tip Tracker is an Android app that helps delivery drivers to keep track of their tips as well as delivery addresses, customers, and more. " +
                "After adding a tip amount, the app can automatically find the GPS coordinates, delivery address, and driving distance for the delivery. Users who want more " +
                "can enter in the addresses ahead of time to start navigation, or enter in customer phone numbers to quickly call them. " +
                "The app surfaces useful stats such as average tip per mile driven and average distance per delivery. " +
                "It stores customer info, including phone numbers, names, notes, and previous orders. " +
                "It also contains comprehensive order history functionality, allowing users to view everything from individual shifts to entire years worth of data.<br><br>" +
                "As of September 2018, the Pro version has accumulated about 1,000 purchases at $2.99 and the Free version has about 6,000 installs. The Pro version has a user rating of 4.6/5 stars, while the Free version is rated 4.2/5 stars."
            );
        }
        else if (this.classList.contains("project2")) {
            $(".carousel-inner").html(
                "<div class='item active'><img src='img/project2/1.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>" +
                "<div class='item'><img src='img/project2/2.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>" +
                "<div class='item'><img src='img/project2/3.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>" +
                "<div class='item'><img src='img/project2/4.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>" +
                "<div class='item'><img src='img/project2/5.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>" +
                "<div class='item'><img src='img/project2/6.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>" +
                "<div class='item'><img src='img/project2/7.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>"
            );

            $(".modal-footer").html("<div class='modal-title'>Store 7667 Delivery Maps<br><a href='http://goo.gl/nfQDfa' target='_blank'>goo.gl/nfQDfa</a></div>" +
                "I wrote this Android app to help delivery drivers at the Domino's store I worked at. It contains all the apartment and hotel maps for our delivery area, allowing drivers " +
                "to quickly find their destinations. The user can employ voice search or a touch menu to find the relevant map. The app also contains a list of known gate codes in the area, " +
                "which any user can update on-the-fly. Store-wide use of my app led to a significant increase in on-time deliveries, an important metric for any delivery restaurant."

            );
        }
        else if (this.classList.contains("project3")) {
            $(".carousel-inner").html(
                "<div class='item active'><img src='img/project3/1.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div> " +
                "<div class='item'> <img src='img/project3/2.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>" +
                "<div class='item'><img src='img/project3/3.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>" +
                "<div class='item'> <img src='img/project3/4.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>" +
                "<div class='item'><img src='img/project3/5.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>"
            );

            $(".modal-footer").html("<div class='modal-title'>ClassTask<br><a href='https://gavingt.github.io/ClassTask' target='_blank'>gavingt.github.io/ClassTask</a></div>ClassTask is a " +
                "to-do list app created specifically for students. Using an intuitive interface, students enter information about the classes they are currently taking. Tasks can then be added by class, " +
                "giving the user an at-a-glance view of which tasks need to be completed for which classes.<br><br>Tasks and login info are stored using Firebase, " +
                "allowing users to access their task data from anywhere. Tasks stay synced across devices even without refreshing.");
        }
        else if (this.classList.contains("project4")) {
            $(".carousel-inner").html(
                "<div class='item active'><img src='img/project4/1.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>" +
                "<div class='item'><img src='img/project4/2.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>" +
                "<div class='item'><img src='img/project4/3.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>" +
                "<div class='item'><img src='img/project4/4.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>"
            );

            $(".modal-footer").html("<div class='modal-title'>Store 7667 Address Verifier<br><a href='https://gavingt.github.io/address-checker' target='_blank'>gavingt.github.io/address-checker</a></div>" +
                "I wrote this app to rectify a shortcoming in the computer system of the Domino's store I worked at. When an employee took a delivery order over the phone, the system " +
                "provided no way to verify whether a given address was actually in the store's delivery area. This led to significant losses for the store, as orders were prepared and then " +
                "cancelled only after it became apparent that the customer was out of the delivery area.<br><br>With this app, the user begins to type an address and is given relevant autocomplete " +
                "suggestions taken from the Google Places API. Upon making a selection, the address is shown on a map along with the store's delivery boundaries. The app tells the user if the address " +
                "is within the store's boundaries, and if it's not then it tells the user the phone number of the correct store that the customer should call."
            );
        }

        else if (this.classList.contains("project5")) {
            $(".carousel-inner").html(
                "<div class='item active'><img src='img/project5/1.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>" +
                "<div class='item'><img src='img/project5/2.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>" +
                "<div class='item'><img src='img/project5/3.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>" +
                "<div class='item'><img src='img/project5/4.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>" +
                "<div class='item'><img src='img/project5/5.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>" +
                "<div class='item'><img src='img/project5/6.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>"
            );

            $(".modal-footer").html("<div class='modal-title'>Visual Surround Sound<br><a href='https://www.youtube.com/watch?v=OtKxeBzwyX0' target='_blank'>youtube.com/watch?v=OtKxeBzwyX0</a></div>" +
                "As the capstone project for my Electrical Engineering degree, my group and I created a device that translates audio information into visible light. Its focus is to assist deaf people while playing videogames. " +
                "The device consists of a pair of glasses containing LEDs and a box to house the control circuitry. Each light around the rim of the glasses corresponds to a different surround sound audio channel. The lights " +
                "illuminate with varying colors and intensities to indicate different frequences and magnitudes of sound.<br><br>The device uses spectrum analyzer chips to determine the frequency content of each surround sound audio " +
                "signal. This frequency information is then fed into a microcontroller that runs various filtering functions before outputting the results to the LEDs in the glasses. A Bluetooth module enables the microcontroller to " +
                "communicate with an Android companion app so that the user can customize various settings.<br><br>My contributions to the project were extensive. I conceived the idea, designed the circuit board, and wrote " +
                "both the microcontroller code and the Android companion app."
            );
        }

        $('#myModal').modal("show");
    });
}


function showFullscreen(imageUrl) {
    //window.location.href = imageUrl;
    window.open(imageUrl, '_blank');
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
