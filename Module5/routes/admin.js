const path= require("path")

const express = require("express");

const rootDir = require("../util/path")

const router = express.Router();

console.log("Admin File");

// /admin/add-products -> GET
router.get("/add-products", (req, res, next) => {
    console.log("Inside Add Products");
     // app.use() is used to create middleware.
    res.sendFile(path.join(rootDir, "views", "add-products.html")) // Automaticaaly sets "Content-Type" header
});

// /admin/add-products -> POST
router.post("/add-products", (req, res, next) => { // app.use() is used to create middleware.
    console.log("In the Products");
    console.log("Request", req.body);
    res.redirect("/")
    // res.send("<form action='/products' method='POST'><input type='text' name='product'/><button type='submit'>Add Product</button></form>") // Automaticaaly sets "Content-Type" header
});

module.exports = router;