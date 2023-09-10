var currentSliderNumber

// Preload images so they're hopefully ready when the user wants to see them.
$.preload = function () {
    for (var i = 0; i < arguments.length; i++) {
        $("<img />").attr("src", arguments[i])
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


// Initialize slider to first photo.
changeSliderPhotos(1, 2048, 1152)


$(".thumbnail1").on("click", function () {
    changeSliderPhotos(1, 2048, 1152)
});

$(".thumbnail2").on("click", function () {
    changeSliderPhotos(2, 2000, 1500)
});

$(".thumbnail3").on("click", function () {
    changeSliderPhotos(3, 1056, 1500)
});

$(".thumbnail4").on("click", function () {
    changeSliderPhotos(4, 2048, 1152)
});

$(".thumbnail5").on("click", function () {
    changeSliderPhotos(5, 2048, 1365)
});

$(".thumbnail6").on("click", function () {
    changeSliderPhotos(6, 2000, 1500)
});

$(".thumbnail7").on("click", function () {
    changeSliderPhotos(7, 2048, 1365)
});

$(".thumbnail8").on("click", function () {
    changeSliderPhotos(8, 2000, 1500)
});


function changeSliderPhotos(sliderNumber, actualPhotoWidth, actualPhotoHeight) {
    // Prevent the currently selected slider from being selected again.
    if (currentSliderNumber == sliderNumber) return
    currentSliderNumber = sliderNumber

    var adjustedWidth = actualPhotoWidth
    var adjustedHeight = actualPhotoHeight
    // Calculate new slider dimensions based on photo. Prevent the slider height from exceeding 900px.
    if (actualPhotoHeight > 900) {
        adjustedHeight = 900
        var scaleFactor = adjustedHeight / actualPhotoHeight
        adjustedWidth = actualPhotoWidth * scaleFactor
    }

    // Prepare slider_container for new photo.
    $('#slider_container').empty()
    $("#slider_container").css('width', adjustedWidth)
    $("#slider_container").css('height', adjustedHeight)

    // Slider is from here: https://github.com/NUKnightLab/juxtapose
    new juxtapose.JXSlider('#slider_container',
        [
            {
                src: "img/slider-photos/" + sliderNumber + "b.jpeg"
            },
            {
                src: "img/slider-photos/" + sliderNumber + "a.jpeg"
            }
        ],
        {
            animate: true,
            showLabels: false,
            showCredits: false,
            startingPosition: "2%",
            makeResponsive: true
        });
}