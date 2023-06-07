const ProductController = require("../controllers/product.controller")

module.exports = app => {
    app.get("/api", ProductController.index);
    app.post("/api/products/new", ProductController.createProduct);
    app.get("/api/products", ProductController.getAllProducts);
    app.get("/api/products/:id", ProductController.getOneProduct);
    app.put("/api/products/edit/:id", ProductController.updateProduct);
    app.delete("/api/products/delete/:id", ProductController.deleteProduct);
    }