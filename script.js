const addToCart = document.querySelectorAll(".add-to-cart");

addToCart.forEach(function (addToCart) {
  addToCart.addEventListener("click", function () {
    alert("Flower Added to Cart");
  });
});
