const grid = document.getElementById("product-grid");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let allProducts = [];

// FETCH FROM BACKEND
fetch("http://localhost:5000/products")
.then(res => res.json())
.then(data => {

    allProducts = data;
    displayProducts(data);

});

// DISPLAY PRODUCTS
function displayProducts(products){

    grid.innerHTML = "";

    products.forEach(product => {

        grid.innerHTML += `
        <div class="card">

            <img src="${product.image}">

            <div class="card-content">

                <h3>${product.name}</h3>

                <p class="price">₹${product.price}</p>

                <p>${product.rating}</p>

                <button onclick="addToCart('${product.name}',${product.price})">
                    Add To Cart
                </button>

                <button onclick="viewProduct(${product.id})">
                    View Details
                </button>

            </div>

        </div>
        `;

    });

}

// ADD TO CART
function addToCart(name, price){

    cart.push({name, price});

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added to Cart!");
}

// VIEW PRODUCT PAGE
function viewProduct(id){

    window.location.href = `product.html?id=${id}`;
}

// SEARCH
document.getElementById("search").addEventListener("keyup", function(){

    let value = this.value.toLowerCase();

    let filtered = allProducts.filter(p =>
        p.name.toLowerCase().includes(value)
    );

    displayProducts(filtered);
});