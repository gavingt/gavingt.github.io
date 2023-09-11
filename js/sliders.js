var currentSliderNumber

// TODO: Any time we change these 12 photos, make sure to enter their dimensions properly in this array.
var photosToDisplay = [
    // [original path, new path, width, height]
    ["img/slider-photos/0a.jpeg", "img/slider-photos/0b.jpeg", 2048, 1365],
    ["img/slider-photos/1a.jpeg", "img/slider-photos/1b.jpeg", 2048, 1374],
    ["img/slider-photos/2a.jpeg", "img/slider-photos/2b.jpeg", 2000, 1500],
    ["img/slider-photos/3a.jpeg", "img/slider-photos/3b.jpeg", 2048, 1152],
    ["img/slider-photos/4a.jpeg", "img/slider-photos/4b.jpeg", 2048, 1365],
    ["img/slider-photos/5a.jpeg", "img/slider-photos/5b.jpeg", 2000, 1500],
    ["img/slider-photos/6a.jpeg", "img/slider-photos/6b.jpeg", 2048, 1152],
    ["img/slider-photos/7a.jpeg", "img/slider-photos/7b.jpeg", 2000, 1500],
    ["img/slider-photos/8a.jpeg", "img/slider-photos/8b.jpeg", 2001, 1500],
    ["img/slider-photos/9a.jpeg", "img/slider-photos/9b.jpeg", 1000, 1499],
    ["img/slider-photos/10a.jpeg", "img/slider-photos/10b.jpeg", 2000, 1500],
    ["img/slider-photos/11a.jpeg", "img/slider-photos/11b.jpeg", 3230, 2396],
]

// Preload images so they're hopefully ready when the user wants to see them.
$.preload = function () {
    for (var i = 0; i < photosToDisplay.length; i++) {
        $("<img />").attr("src", photosToDisplay[i][0])
        $("<img />").attr("src", photosToDisplay[i][1])
    }
};

$.preload();


// Initialize slider to first photo.
changeSliderPhotos(0)


$("#thumbnail0").on("click", function () {
    changeSliderPhotos(0)
});

$("#thumbnail1").on("click", function () {
    changeSliderPhotos(1)
});

$("#thumbnail2").on("click", function () {
    changeSliderPhotos(2)
});

$("#thumbnail3").on("click", function () {
    changeSliderPhotos(3)
});

$("#thumbnail4").on("click", function () {
    changeSliderPhotos(4)
});

$("#thumbnail5").on("click", function () {
    changeSliderPhotos(5)
});

$("#thumbnail6").on("click", function () {
    changeSliderPhotos(6)
});

$("#thumbnail7").on("click", function () {
    changeSliderPhotos(7)
});

$("#thumbnail8").on("click", function () {
    changeSliderPhotos(8)
});

$("#thumbnail9").on("click", function () {
    changeSliderPhotos(9)
});

$("#thumbnail10").on("click", function () {
    changeSliderPhotos(10)
});

$("#thumbnail11").on("click", function () {
    changeSliderPhotos(11)    
});

function changeSliderPhotos(sliderNumber) {
    // Prevent the currently selected slider from being selected again.
    if (currentSliderNumber == sliderNumber) return
    currentSliderNumber = sliderNumber

    setBorderForSelectedThumbnail(sliderNumber)

    var actualPhotoWidth = photosToDisplay[sliderNumber][2]
    var actualPhotoHeight = photosToDisplay[sliderNumber][3]

    var adjustedWidth = actualPhotoWidth
    var adjustedHeight = actualPhotoHeight

    // Calculate new slider dimensions based on photo. Prevent the slider height from exceeding 850px.
    if (actualPhotoHeight > 850) {
        adjustedHeight = 850
        var scaleFactor = adjustedHeight / actualPhotoHeight
        adjustedWidth = actualPhotoWidth * scaleFactor
    }

    // Prepare slider_container for new photo.
    $('#slider_container').empty()
    $("#slider_container").css('width', adjustedWidth)
    $("#slider_container").css('height', adjustedHeight)

    // Slider documentation is here: https://github.com/NUKnightLab/juxtapose
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


function setBorderForSelectedThumbnail(sliderNumber) {
    var index = 0
    $('#thumbnail_container img').each(function () {
        if (index == sliderNumber) {
            $(this).css('border', '6px solid #4798D1')
        } else {
            $(this).css('border', '6px solid #FFFFFF')
        }
        index++
    })
}