$(".product-grid-item").click(function() {
    $('#platform-modal').modal('toggle', $(this));
});

$("#modal-close-button").click(function() {
    $('#platform-modal').modal("hide");
});




$('#platform-modal').on('show.bs.modal', function (event) {
    var clickedButton = $(event.relatedTarget)
     // Extract info from data-product-name attribute
    var selectedProductName = clickedButton.data('product-name')
    // Update the modal's content.
    var modal = $(this)
    modal.find('#modal-product-selected-label').text(selectedProductName)
  })
