const params = new URLSearchParams(window.location.search);

const id = params.get("id");

fetch(`http://localhost:5000/products/${id}`)
.then(res => res.json())
.then(product => {

    document.getElementById("product-details").innerHTML = `

        <div class="card">

            <img src="${product.image}">

            <div class="card-content">

                <h2>${product.name}</h2>

                <p class="price">₹${product.price}</p>

                <p class="rating">${product.rating}</p>

                <p style="margin:20px 0;">
                    ${product.description}
                </p>

                <button onclick="addToCart('${product.name}', ${product.price})">
                    Add To Cart
                </button>

                <br><br>

                <button onclick="window.location.href='index.html'">
                    Back
                </button>

            </div>

        </div>

    `;

});

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price){

    cart.push({name, price});

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product Added Successfully!");
}