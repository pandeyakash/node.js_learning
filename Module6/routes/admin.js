const path= require("path")

const express = require("express");

const rootDir = require("../util/path")

const router = express.Router();

const products = [];

// /admin/add-products -> GET
router.get("/add-products", (req, res, next) => {
    res.render("add-products", {docTitle: "Add Product", path: "/admin/add-products"}) // Automaticaaly sets "Content-Type" header
});

// /admin/add-products -> POST
router.post("/add-products", (req, res, next) => { // app.use() is used to create middleware.
    products.push({title: req.body.title})
    res.redirect("/")
    // res.send("<form action='/products' method='POST'><input type='text' name='product'/><button type='submit'>Add Product</button></form>") // Automaticaaly sets "Content-Type" header
});

// module.exports = router;

exports.routes = router;
exports.products = products;