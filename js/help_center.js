var selectedProductName = null

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
            //element.css('pointer-events','')
        }
    })

    // Attach the unavailable platforms last.
    platforms.forEach(element => {
        if (element.css('opacity') == 0.15) {
            element.appendTo(platformGrid)
            //element.css('pointer-events','none')
        }
    })

    ios.click(function () {
        $('.toast').toast('show')
        //alert("adsf")
    })

}