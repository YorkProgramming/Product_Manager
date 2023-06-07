const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product name is required."],
        minlength: [3, "Product name must be at least 3 characters long."]
    },      
    price: {
        type: Number,
        required: [true, "Product price is required."],
        min: [0, "Product price must be at least 0."]
    },
    description: {
        type: String,
        required: [true, "Product description is required."],
        minlength: [3, "Product description must be at least 3 characters long."]
    }
}, { timestamps: true });

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;