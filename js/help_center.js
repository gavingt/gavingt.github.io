var selectedProductName = null

$(".product-grid-item").click(function () {
    // Fetch product name from data-product-name attribute set in help_center.html.
    selectedProductName = $(this).data('product-name')
    $('#platform-modal').modal('show')
})


$("#modal-close-button").click(function () {
    $('#platform-modal').modal("hide")
})

// When the platform modal is shown, set modal-product-selected-label text and the visible platforms.
$('#platform-modal').on('show.bs.modal', function () {
    var modal = $(this)
    modal.find('#modal-product-selected-label').text("You selected " + selectedProductName)
    // TODO: Set visible platforms
})

$("#modal-change-selected-product").click(function () {

})