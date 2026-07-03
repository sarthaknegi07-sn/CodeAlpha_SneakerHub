const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Products
const products = [
    {
        id: 1,
        name: "Nike Air Max",
        price: 4999,
        rating: "⭐⭐⭐⭐⭐",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
        description: "Comfortable running shoes with Air cushioning."
    },
    {
        id: 2,
        name: "Adidas Ultraboost",
        price: 5499,
        rating: "⭐⭐⭐⭐☆",
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500",
        description: "High-performance running shoes."
    },
    {
        id: 3,
        name: "Puma RS-X",
        price: 3999,
        rating: "⭐⭐⭐⭐⭐",
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500",
        description: "Stylish and comfortable sneakers."
    }
];

// Get all products
app.get("/products", (req, res) => {
    res.json(products);
});

// Get product by ID
app.get("/products/:id", (req, res) => {
    const product = products.find(p => p.id == req.params.id);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
});

// Store orders
let orders = [];

// Place order
app.post("/orders", (req, res) => {

    const order = req.body;

    orders.push(order);

    console.log(order);

    res.json({
        success: true,
        message: "Order Placed Successfully!"
    });

});

// Start Server
app.listen(5000, () => {
    console.log("🚀 Server running on http://localhost:5000");
});