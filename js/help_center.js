const COMPATIBILITY_CHART_URL = "https://picturekeeper.com/a/kb/articles/20240244266395-Compatibility-Chart"

var selectedProductName = null
var selectedPlatformName = null

$(".product-grid-item").click(function () {
    // Fetch product name from data-product-name attribute set in help_center.html.
    selectedProductName = $(this).data('product-name')
    $('#platform-modal').modal('show')
})


$("#modal-close-button").click(function () {
    $('#platform-modal').modal("hide")
})

// When the platform modal is shown, set modal-product-selected-label text and the available platforms.
$('#platform-modal').on('show.bs.modal', function () {
    var modal = $(this)
    modal.find('#modal-product-selected-label').text("You selected " + selectedProductName)
    setPlatformOpacitiesAndOrder()
})

$("#modal-change-selected-product").click(function () {
    $('#platform-modal').modal("hide")
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

    // Detach all platforms.
    platforms.forEach(element => {
        element.detach()
    })

    // Attach only the platforms that are available first.
    platforms.forEach(element => {
        if (element.css('opacity') == 1) {
            element.appendTo(platformGrid)
        }
    })

    // Attach the unavailable platforms last.
    platforms.forEach(element => {
        if (element.css('opacity') == 0.15) {
            element.appendTo(platformGrid)
        }
    })
}



$("#platform-grid").children().click(function () {
    selectedPlatformName = $(this).data('platform-name')
    window.location.href = fetchSupportUrl()
})



// Fetch URL for each product and platform pair.
// If platform is unavailable for the selected product, fetch the compatibility chart URL instead.
function fetchSupportUrl() {
    switch (selectedProductName) {
        case "Picture Keeper Connect": {
            switch (selectedPlatformName) {
                case "iPhone & iPad": return null
                case "Android": return null
                case "Windows": return null
                case "Mac": return null
            }
        }

        case "Picture Keeper": {
            switch (selectedPlatformName) {
                case "iPhone & iPad": return COMPATIBILITY_CHART_URL
                case "Android": return COMPATIBILITY_CHART_URL
                case "Windows": return null
                case "Mac": return null
            }
        }

        case "Picture Keeper For Android": {
            switch (selectedPlatformName) {
                case "iPhone & iPad": return COMPATIBILITY_CHART_URL
                case "Android": return null
                case "Windows": return null
                case "Mac": return null
            }
        }

        case "Picture Keeper Pro": {
            switch (selectedPlatformName) {
                case "iPhone & iPad": return COMPATIBILITY_CHART_URL
                case "Android": return COMPATIBILITY_CHART_URL
                case "Windows": return null
                case "Mac": return null
            }
        }

        case "Picture Keeper Pro SSD": {
            switch (selectedPlatformName) {
                case "iPhone & iPad": return COMPATIBILITY_CHART_URL
                case "Android": return COMPATIBILITY_CHART_URL
                case "Windows": return null
                case "Mac": return null
            }
        }

        case "Picture Keeper Pro HDD": {
            switch (selectedPlatformName) {
                case "iPhone & iPad": return COMPATIBILITY_CHART_URL
                case "Android": return COMPATIBILITY_CHART_URL
                case "Windows": return null
                case "Mac": return null
            }
        }
    }

}