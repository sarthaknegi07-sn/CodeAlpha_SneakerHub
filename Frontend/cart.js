let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");

function displayCart() {

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {

        cartItems.innerHTML = "<h3>Your cart is empty.</h3>";
        totalPrice.innerHTML = "";
        return;
    }

    cart.forEach((item, index) => {

        total += item.price;

        cartItems.innerHTML += `
            <div class="card" style="margin-bottom:20px;">
                <div class="card-content">
                    <h3>${item.name}</h3>
                    <p class="price">₹${item.price}</p>

                    <button onclick="removeItem(${index})">
                        Remove
                    </button>
                </div>
            </div>
        `;

    });

    totalPrice.innerHTML = "Total: ₹" + total;
}

function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem("cart",JSON.stringify(cart));

    displayCart();
}

displayCart();

document.getElementById("checkout-btn").onclick = function(){

    window.location.href = "checkout.html";

};