var currentSliderNumber

// The photo set this page shows (e.g. "img/slider-photos-hsn/"), from the data-photo-folder attribute on <body>.
var photoFolder = document.body.dataset.photoFolder

// [original path, new path, width, height] for each pair, in display order. Filled from the folder's slider.json, which
// sliders_admin.html publishes and the iOS and Android apps' Slider Demo also read, so this page and the apps always match.
var photosToDisplay = []

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

$.getJSON(photoFolder + "slider.json", function (list) {
    photosToDisplay = list.pairs.map(function (pair) {
        return [photoFolder + pair.before, photoFolder + pair.after, pair.width, pair.height]
    })

    // Preload images so they're hopefully ready when the user wants to see them.
    for (var i = 0; i < photosToDisplay.length; i++) {
        $("<img />").attr("src", photosToDisplay[i][0])
        $("<img />").attr("src", photosToDisplay[i][1])
    }

    // One thumbnail per pair, showing its original photo.
    photosToDisplay.forEach(function (photo, index) {
        $("<img />").attr("src", photo[0]).on("click", function () {
            changeSliderPhotos(index)
        }).appendTo("#thumbnail_container")
    })

    // Two rows of thumbnails at the bottom of the page (see #thumbnail_container in sliders.css).
    document.getElementById("thumbnail_container").style.setProperty("--thumbnail-columns", Math.ceil(photosToDisplay.length / 2))

    // Refit the slider whenever the window changes size. This is added before juxtapose's own resize listener, so it runs first.
    window.addEventListener("resize", sizeSlider)

    // Initialize slider to first photo.
    changeSliderPhotos(0)
}).fail(function () {
    $("#slider_area").text("Couldn't load the photos. Reload the page to try again.")
})


function changeSliderPhotos(sliderNumber) {
    // Prevent the currently selected slider from being selected again.
    if (currentSliderNumber == sliderNumber) return
    currentSliderNumber = sliderNumber

    setBorderForSelectedThumbnail(sliderNumber)

    // Prepare slider_container for new photo.
    $('#slider_container').empty()
    sizeSlider()

    // Slider documentation is here: https://github.com/NUKnightLab/juxtapose
    new juxtapose.JXSlider('#slider_container',
        [
            {
                src: photosToDisplay[sliderNumber][1]
            },
            {
                src: photosToDisplay[sliderNumber][0]
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


// Make the slider as large as the current photo can be within the space above the thumbnails. Juxtapose sets the
// slider's height from its width, on load and on every resize, so the width is what has to fit.
function sizeSlider() {
    var actualPhotoWidth = photosToDisplay[currentSliderNumber][2]
    var actualPhotoHeight = photosToDisplay[currentSliderNumber][3]
    var area = document.getElementById("slider_area")
    var scaleFactor = Math.min(area.clientWidth / actualPhotoWidth, area.clientHeight / actualPhotoHeight)

    $("#slider_container").css('width', Math.floor(actualPhotoWidth * scaleFactor))
    $("#slider_container").css('height', Math.floor(actualPhotoHeight * scaleFactor))
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
