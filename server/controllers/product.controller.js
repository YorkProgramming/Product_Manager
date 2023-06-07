const Product = require("../models/product.model");

module.exports = {

    index: (req, res) => {
        res.json({
            message: "Hello World"
        });
    },

    createProduct: (req, res) => {
        const { name, price, description } = req.body;
        Product.create({
            name,
            price,
            description
        })
            .then(product => res.json(product))
            .catch(err => res.json({ message: "Something went wrong when Creating", error: err }));
    },

    getAllProducts: (req, res) => {
        Product.find({})
            .then(product => res.json(product))
            .catch(err => res.json({ message: "Something went wrong when getting All", error: err }));
    },

    getOneProduct: (req, res) => {
        Product.findOne({ _id: req.params.id })
            .then(product => res.json(product))
            .catch(err => res.json({ message: "Something went wrong when getting One", error: err }));
    },

    updateProduct: (req, res) => {
        Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then(updatedProduct => res.json({ product: updatedProduct }))
        .catch(err => res.json({ message: "Something went wrong when Updating", error: err }));
    },

    deleteProduct: (req, res) => {
        Product.findByIdAndDelete(req.params.id)
        .then(deletedProduct => res.json({ product: deletedProduct }))
        .catch(err => res.json({ message: "Something went wrong when Deleting", error: err }));
    }}