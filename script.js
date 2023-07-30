var addToCartButtons = document.querySelectorAll('.product .btn');

function addToCart(event) {
  event.preventDefault();
  // Add your logic for adding the product to the cart here
  console.log('Product added to cart');
}

addToCartButtons.forEach(function(button) {
  button.addEventListener('click', addToCart);
});
