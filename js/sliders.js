
//Preloads images in the carousels so they're hopefully ready when the user wants to see them. This must come before we call the function below.
$.preload = function () {
    for (var i = 0; i < arguments.length; i++) {
        $("<img />").attr("src", arguments[i]);
    }
};

$.preload(
    "img/slider-photos/1a.jpeg", "img/slider-photos/1b.jpeg",
    "img/slider-photos/2a.jpeg", "img/slider-photos/2b.jpeg",
    "img/slider-photos/3a.jpeg", "img/slider-photos/3b.jpeg",
    "img/slider-photos/4a.jpeg", "img/slider-photos/4b.jpeg",
    "img/slider-photos/5a.jpeg", "img/slider-photos/5b.jpeg",
    "img/slider-photos/6a.jpeg", "img/slider-photos/6b.jpeg",
    "img/slider-photos/7a.jpeg", "img/slider-photos/7b.jpeg",
    "img/slider-photos/8a.jpeg", "img/slider-photos/8b.jpeg"
);


$(".thumbnail1").on("click", function () {
    showSlider(1)
});

$(".thumbnail2").on("click", function () {
    showSlider(2)
});

$(".thumbnail3").on("click", function () {
    showSlider(3)
});

$(".thumbnail4").on("click", function () {
    showSlider(4)
});

$(".thumbnail5").on("click", function () {
    showSlider(5)
});

$(".thumbnail6").on("click", function () {
    showSlider(6)
});

$(".thumbnail7").on("click", function () {
    showSlider(7)
});

$(".thumbnail8").on("click", function () {
    showSlider(8)
});


function showSlider(sliderNumber) {
    $('#slider_container').empty()

    new juxtapose.JXSlider('#slider_container',
        [
            {
                src: "img/slider-photos/" + sliderNumber + "a.jpeg"
            },
            {
                src: "img/slider-photos/" + sliderNumber + "b.jpeg"
            }
        ],
        {
            animate: true,
            showLabels: false,
            showCredits: false,
            startingPosition: "50%",
            makeResponsive: true
        });
}