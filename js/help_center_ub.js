
const UB_SSD_IOS_URL = "https://support.ultimatebackup.com/hc/en-us/categories/30110095026971"
const UB_SSD_ANDROID_URL = "https://support.ultimatebackup.com/hc/en-us/categories/30110092906523"
const UB_SSD_WINDOWS_URL = "https://support.ultimatebackup.com/hc/en-us/categories/30110093037723"
const UB_SSD_MAC_URL = "https://support.ultimatebackup.com/hc/en-us/categories/30110056829723"

const UB_4IN1_IOS_URL = "https://support.ultimatebackup.com/hc/en-us/categories/30110092096027"
const UB_4IN1_ANDROID_URL = "https://support.ultimatebackup.com/hc/en-us/categories/30110055920667"
const UB_4IN1_WINDOWS_URL = "https://support.ultimatebackup.com/hc/en-us/categories/30110063644955"
const UB_4IN1_MAC_URL = "https://support.ultimatebackup.com/hc/en-us/categories/30110092489115"

var selectedProductName = null
var selectedPlatformName = null

// Ensure modal gets dismissed before leaving page. Also set the background color of all hero buttons back to white.
window.onbeforeunload = function(){
    $('#platform-modal').modal("hide")
    $('.hero-button').css('background-color', 'white')
}

// Make "Shop Products" button work without theme.js (as theme.js causes conflicts with Bootstrap modals).
$("span:contains('Shop Products')").click(function() {
    window.open("https://ultimatebackup.com/collections/frontpage", "_self")
})

$(".product-grid-item").click(function () {
    // Fetch product name from data-product-name attribute set in help_center.html.
    selectedProductName = $(this).data('product-name')
    $('#platform-modal').modal('show')
})

// When the platform modal is shown, set modal-product-selected-label text and the available platforms.
$('#platform-modal').on('show.bs.modal', function () {
    var modal = $(this)
    modal.find('#modal-title').html("Which platform are you using with your " + '<span class="bold-product-name">' + selectedProductName + '</span>' + "?")
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
    // We percent-encode the alias name so it can be properly retrieved on the other end.
    let aliasUrlComponent = "?alias=" + encodeURIComponent("Using " + selectedProductName + " with " + selectedPlatformName)

    window.location.href = fetchSupportUrl() + aliasUrlComponent
})



// Fetch URL for each product and platform pair.
function fetchSupportUrl() {
    switch (selectedProductName) {
        case "Ultimate Backup SSD": {
            switch (selectedPlatformName) {
                case "iPhone or iPad": return UB_SSD_IOS_URL
                case "Android": return UB_SSD_ANDROID_URL
                case "Windows": return UB_SSD_WINDOWS_URL
                case "Mac": return UB_SSD_MAC_URL
            }
        }

        case "Ultimate Backup 4-in-1": {
            switch (selectedPlatformName) {
                case "iPhone or iPad": return UB_4IN1_IOS_URL
                case "Android": return UB_4IN1_ANDROID_URL
                case "Windows": return UB_4IN1_WINDOWS_URL
                case "Mac": return UB_4IN1_MAC_URL
            }
        }
    }
}