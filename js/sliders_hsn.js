var currentSliderNumber


// TODO: Any time we change these photos, make sure to enter their dimensions properly in this array.
// TODO: Also remember to edit the corresponding list in the SliderDemoVC of the PKC iOS app.
var photosToDisplay = [
    // [original path, new path, width, height]
    ["img/slider-photos-hsn/0a.jpg", "img/slider-photos-hsn/0b.jpg", 2000, 1329],
    ["img/slider-photos-hsn/1a.jpg", "img/slider-photos-hsn/1b.jpg", 2000, 1332],
    ["img/slider-photos-hsn/2a.jpg", "img/slider-photos-hsn/2b.jpg", 2000, 927],
    ["img/slider-photos-hsn/3a.jpg", "img/slider-photos-hsn/3b.jpg", 2000, 1334],
    ["img/slider-photos-hsn/4a.jpg", "img/slider-photos-hsn/4b.jpg", 2000, 1484],
    ["img/slider-photos-hsn/5a.jpg", "img/slider-photos-hsn/5b.jpg", 2000, 1290],
    ["img/slider-photos-hsn/6a.jpg", "img/slider-photos-hsn/6b.jpg", 2000, 1393],
    ["img/slider-photos-hsn/7a.jpg", "img/slider-photos-hsn/7b.jpg", 2000, 1230],
    ["img/slider-photos-hsn/8a.jpg", "img/slider-photos-hsn/8b.jpg", 2000, 1333],
    ["img/slider-photos-hsn/9a.jpg", "img/slider-photos-hsn/9b.jpg", 2000, 1333],
    ["img/slider-photos-hsn/10a.jpg", "img/slider-photos-hsn/10b.jpg", 2000, 1333],
    ["img/slider-photos-hsn/11a.jpg", "img/slider-photos-hsn/11b.jpg", 2000, 1331],
    ["img/slider-photos-hsn/12a.jpg", "img/slider-photos-hsn/12b.jpg", 2000, 1334],
]

// Preload images so they're hopefully ready when the user wants to see them.
for (var i = 0; i < photosToDisplay.length; i++) {
    $("<img />").attr("src", photosToDisplay[i][0])
    $("<img />").attr("src", photosToDisplay[i][1])
}

// Define a callback that fires any time slider_container's childList changes. If it has more than 1 child, remove all but the last child.
// This solves a bug in which two sliders could be made visible.
const callback = (mutationList) => {
    for (const mutation of mutationList) {
        if (mutation.type === "childList") {
            console.log("A child node has been added or removed.");
            const children = $("#slider_container").children()
            if (children.length > 1) {
                console.log("Duplicate child detected and removed")
                children.not(":last").each(function () {
                    $(this).remove()
                })
            }
        }
    }
}

// Start observing slider_container for changes.
new MutationObserver(callback).observe(document.getElementById("slider_container"), { attributes: true, childList: true, subtree: true })

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

$("#thumbnail12").on("click", function () {
    changeSliderPhotos(12)
});

$("#thumbnail13").on("click", function () {
    changeSliderPhotos(13)
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
                src: "img/slider-photos-hsn/" + sliderNumber + "b.jpg"
            },
            {
                src: "img/slider-photos-hsn/" + sliderNumber + "a.jpg"
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
            $(this).css('border', '6px solid #29e4f2')
        } else {
            $(this).css('border', '6px solid #000000')
        }
        index++
    })
}
