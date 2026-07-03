document.getElementById("checkout-form").addEventListener("submit", function(e){

    e.preventDefault();

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;
    let payment = document.getElementById("payment").value;

    let total = cart.reduce((sum, item) => sum + item.price, 0);

    let order = {
        name,
        address,
        phone,
        payment,
        items: cart,
        total
    };

    // SEND TO BACKEND
    fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {

        console.log(data);

        localStorage.removeItem("cart");

        window.location.href = "success.html";

    });

});