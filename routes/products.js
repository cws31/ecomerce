const express = require('express');
const router = express.Router();

// In-memory products database
let products = [
    {
        id: 1,
        name: "Example Product",
        price: 29.99,
        description: "This is an example product"
    }
];

// GET /products - Get all products
router.get('/', (req, res) => {
    res.json(products);
});

// POST /products - Add a new product
router.post('/', (req, res) => {
    const { name, price, description } = req.body;
    
    // Validate required fields
    if (!name || !price) {
        return res.status(400).json({ error: 'Name and price are required' });
    }

    // Create new product
    const newProduct = {
        id: products.length + 1,
        name,
        price,
        description: description || ''
    };

    // Add to products array
    products.push(newProduct);

    // Return the newly created product
    res.status(201).json(newProduct);
});

module.exports = router;