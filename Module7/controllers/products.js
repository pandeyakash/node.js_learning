const Product = require("../models/product")

exports.getAddProducts = (req, res, next) => {
    res.render("add-products", {docTitle: "Add Product", path: "/admin/add-products"}) // Automaticaaly sets "Content-Type" header
}

exports.postAddProducts = (req, res, next) => { 
    const product = new Product(req.body.title);
    product.save();
    res.redirect("/")
}

exports.getProducts = (req, res, next) => { 
    Product.fetchAll((products) => {
        res.render("shop", {prods: products, docTitle: "Shop", path: "/"})
    });
}