// scripts.js

$(document).ready(function() {
    // Add event listener to the "Add to cart" button
    $('#addToCartButton').click(function() {
        var quantity = parseInt($('#inputQuantity').val());

        // You can implement your cart logic here.
        // For simplicity, we will just show checkout options.
        $('#checkoutOptions').show();
    });
});




// sc for pay

$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})