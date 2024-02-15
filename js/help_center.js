const COMPATIBILITY_CHART_URL = "https://picturekeeper.com/a/kb/articles/20240244266395-Compatibility-Chart"

var selectedProductName = null
var selectedPlatformName = null


// Fit product-grid-title to the window, and also re-fit it any time the window resizes.
$('#product-grid-title').quickfit({min: 16, max: window.innerWidth > 550 && window.innerWidth < 800 ? 28 : 38});
window.onresize = function() {
    $('#product-grid-title').quickfit({min: 16, max: window.innerWidth > 550 && window.innerWidth < 800 ? 28 : 38});
}

// Ensure modal gets dismissed before leaving page.
window.onbeforeunload = function(){
    $('#platform-modal').modal("hide")
}

$(".product-grid-item").click(function () {
    // Fetch product name from data-product-name attribute set in help_center.html.
    selectedProductName = $(this).data('product-name')
    $('#platform-modal').modal('show')
})

// When the platform modal is shown, set modal-product-selected-label text and the available platforms.
$('#platform-modal').on('show.bs.modal', function () {
    var modal = $(this)
    modal.find('#modal-title').html("Which platform are you using with your " + '<span class="bold-product-name">' + selectedProductName + '</span>' + "?")
    setPlatformOpacitiesAndOrder()
})

$("#modal-close-button").click(function () {
    $('#platform-modal').modal("hide")
})

$("#modal-change-selected-product").click(function () {
    $('#platform-modal').modal("hide")
})

$("#platform-grid").children().click(function () {
    selectedPlatformName = $(this).data('platform-name')
    window.location.href = fetchSupportUrl()
})


function setPlatformOpacitiesAndOrder() {
    var platformGrid = $('#platform-grid')
    var ios = $('#platform-ios').parent()
    var android = $('#platform-android').parent()
    var windows = $('#platform-windows').parent()
    var mac = $('#platform-mac').parent()
    var platforms = [ios, android, windows, mac]

    if (selectedProductName == "Picture Keeper Connect") {
        ios.css('opacity', '1')
        android.css('opacity', '1')
        windows.css('opacity', '1')
        mac.css('opacity', '1')
    } else if (selectedProductName == "Picture Keeper") {
        ios.css('opacity', '0.15')
        android.css('opacity', '0.15')
        windows.css('opacity', '1')
        mac.css('opacity', '1')
    } else if (selectedProductName == "Picture Keeper For Android") {
        ios.css('opacity', '0.15')
        android.css('opacity', '1')
        windows.css('opacity', '1')
        mac.css('opacity', '1')
    } else if (selectedProductName == "Picture Keeper Pro") {
        ios.css('opacity', '0.15')
        android.css('opacity', '0.15')
        windows.css('opacity', '1')
        mac.css('opacity', '1')
    } else if (selectedProductName == "Picture Keeper Pro SSD") {
        ios.css('opacity', '0.15')
        android.css('opacity', '0.15')
        windows.css('opacity', '1')
        mac.css('opacity', '1')
    } else if (selectedProductName == "Picture Keeper Pro HDD") {
        ios.css('opacity', '0.15')
        android.css('opacity', '0.15')
        windows.css('opacity', '1')
        mac.css('opacity', '1')
    }

    // Detach all platform elements.
    platforms.forEach(element => {
        element.detach()
    })

    // Attach only the platform elements that are available first.
    platforms.forEach(element => {
        if (element.css('opacity') == 1) {
            element.appendTo(platformGrid)
        }
    })

    // Attach the unavailable platform elements last.
    platforms.forEach(element => {
        if (element.css('opacity') == 0.15) {
            element.appendTo(platformGrid)
        }
    })
}


// Fetch URL for each product and platform pair.
// If platform is unavailable for the selected product, fetch the compatibility chart URL instead.
function fetchSupportUrl() {
    switch (selectedProductName) {
        case "Picture Keeper Connect": {
            switch (selectedPlatformName) {
                case "iPhone & iPad": return "https://picturekeeper.com/a/kb/categories/22950717176475"
                case "Android": return "https://picturekeeper.com/a/kb/categories/22950754010139"
                case "Windows": return "https://picturekeeper.com/a/kb/categories/22950741094555"
                case "Mac": return "https://picturekeeper.com/a/kb/categories/22950747714075"
            }
        }

        case "Picture Keeper": {
            switch (selectedPlatformName) {
                case "iPhone & iPad": return COMPATIBILITY_CHART_URL
                case "Android": return COMPATIBILITY_CHART_URL
                case "Windows": return "https://picturekeeper.com/a/kb/categories/22951102386843"
                case "Mac": return "https://picturekeeper.com/a/kb/categories/22951108861211"
            }
        }

        case "Picture Keeper For Android": {
            switch (selectedPlatformName) {
                case "iPhone & iPad": return COMPATIBILITY_CHART_URL
                case "Android": return "https://picturekeeper.com/a/kb/categories/22951113921691"
                case "Windows": return "https://picturekeeper.com/a/kb/categories/22951116584219"
                case "Mac": return "https://picturekeeper.com/a/kb/categories/22951128887963"
            }
        }

        case "Picture Keeper Pro": {
            switch (selectedPlatformName) {
                case "iPhone & iPad": return COMPATIBILITY_CHART_URL
                case "Android": return COMPATIBILITY_CHART_URL
                case "Windows": return "https://picturekeeper.com/a/kb/categories/22951150572571"
                case "Mac": return "https://picturekeeper.com/a/kb/categories/22951164815131"
            }
        }

        case "Picture Keeper Pro SSD": {
            switch (selectedPlatformName) {
                case "iPhone & iPad": return COMPATIBILITY_CHART_URL
                case "Android": return COMPATIBILITY_CHART_URL
                case "Windows": return "https://picturekeeper.com/a/kb/categories/22951183916187"
                case "Mac": return "https://picturekeeper.com/a/kb/categories/22951198744859"
            }
        }

        case "Picture Keeper Pro HDD": {
            switch (selectedPlatformName) {
                case "iPhone & iPad": return COMPATIBILITY_CHART_URL
                case "Android": return COMPATIBILITY_CHART_URL
                case "Windows": return "https://picturekeeper.com/a/kb/categories/22951186089755"
                case "Mac": return "https://picturekeeper.com/a/kb/categories/22951201027867"
            }
        }
    }
}