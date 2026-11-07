
let total = 0;

function addToCart(name, price) {

    let cartItems = document.getElementById("cartItems");

    let item = document.createElement("li");

    item.innerHTML = name + " - ₹" + price;

    cartItems.appendChild(item);

    total = total + price;

    document.getElementById("total").innerHTML = total;
}

function clearCart() {

    document.getElementById("cartItems").innerHTML = "";

    total = 0;

    document.getElementById("total").innerHTML = total;
}
