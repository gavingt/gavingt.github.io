const COMPATIBILITY_CHART_URL = "https://picturekeeper.zendesk.com/hc/en-us/articles/20240244266395-Compatibility-Chart"

const PKC_IOS_URL = "https://picturekeeper.zendesk.com/hc/en-us/categories/22950717176475-Picture-Keeper-Connect-iPhone-and-iPad"
const PKC_ANDROID_URL = "https://picturekeeper.zendesk.com/hc/en-us/categories/22950754010139-Picture-Keeper-Connect-Android"
const PK_WINDOWS_URL = "https://picturekeeper.zendesk.com/hc/en-us/categories/22951102386843-Picture-Keeper-Windows"
const PK_MAC_URL = "https://picturekeeper.zendesk.com/hc/en-us/categories/22951108861211-Picture-Keeper-Mac"
const PK_PRO_WINDOWS_URL = "https://picturekeeper.zendesk.com/hc/en-us/categories/22951150572571-Picture-Keeper-Pro-Windows"
const PK_PRO_MAC_URL = "https://picturekeeper.zendesk.com/hc/en-us/categories/22951164815131-Picture-Keeper-Pro-Mac"

var selectedProductName = null
var selectedPlatformName = null

// Ensure modal gets dismissed before leaving page. Also set the background color of all hero buttons back to white.
window.onbeforeunload = function(){
    $('#platform-modal').modal("hide")
    $('.hero-button').css('background-color', 'white')
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
    // Add alias name to the fetchSupportUrl() value. This allows the Help Center to display the product and platform name selected by the user, even when displaying another category.
    // This enables us to reuse the same category multiple times without the user noticing.
    window.location.href = fetchSupportUrl() + "?alias=" + selectedProductName + " (" + selectedPlatformName + ")"
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
                case "iPhone & iPad": return PKC_IOS_URL
                case "Android": return PKC_ANDROID_URL
                case "Windows": return PK_WINDOWS_URL
                case "Mac": return PK_MAC_URL
            }
        }

        case "Picture Keeper": {
            switch (selectedPlatformName) {
                case "iPhone & iPad": return COMPATIBILITY_CHART_URL
                case "Android": return COMPATIBILITY_CHART_URL
                case "Windows": return PK_WINDOWS_URL
                case "Mac": return PK_MAC_URL
            }
        }

        case "Picture Keeper For Android": {
            switch (selectedPlatformName) {
                case "iPhone & iPad": return COMPATIBILITY_CHART_URL
                case "Android": return PKC_ANDROID_URL
                case "Windows": return PK_WINDOWS_URL
                case "Mac": return PK_MAC_URL
            }
        }

        case "Picture Keeper Pro": {
            switch (selectedPlatformName) {
                case "iPhone & iPad": return COMPATIBILITY_CHART_URL
                case "Android": return COMPATIBILITY_CHART_URL
                case "Windows": return PK_PRO_WINDOWS_URL
                case "Mac": return PK_PRO_MAC_URL
            }
        }

        case "Picture Keeper Pro SSD": {
            switch (selectedPlatformName) {
                case "iPhone & iPad": return COMPATIBILITY_CHART_URL
                case "Android": return COMPATIBILITY_CHART_URL
                case "Windows": return PK_PRO_WINDOWS_URL
                case "Mac": return PK_PRO_MAC_URL
            }
        }

        case "Picture Keeper Pro HDD": {
            switch (selectedPlatformName) {
                case "iPhone & iPad": return COMPATIBILITY_CHART_URL
                case "Android": return COMPATIBILITY_CHART_URL
                case "Windows": return PK_PRO_WINDOWS_URL
                case "Mac": return PK_PRO_MAC_URL
            }
        }
    }
}