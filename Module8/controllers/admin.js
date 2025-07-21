const Product = require("../models/product")

exports.getAddProducts = (req, res, next) => {
    res.render("admin/add-products", {docTitle: "Add Product", path: "/admin/add-products"}) // Automaticaaly sets "Content-Type" header
}

exports.postAddProducts = (req, res, next) => { 
    const title = req.body.title
    const imgUrl = req.body.imgUrl
    const price = req.body.price
    const description = req.body.description
    const product = new Product(title, imgUrl, description, price);
    product.save();
    res.redirect("/")
}

exports.getProducts = (req, res, next) => { 
    Product.fetchAll((products) => {
        res.render("admin/products", {prods: products, docTitle: "Admin Products", path: "/admin/products"})
    });
}