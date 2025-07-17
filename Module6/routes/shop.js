const path = require("path")

const express = require("express");

const rootDir = require("../util/path")
const adminData = require("./admin")

const router = express.Router();

console.log("Shop File");


router.get("/", (req, res, next) => { // app.use() is used to create middleware.
    const products = adminData.products;
    res.render("shop", {prods: products, docTitle: "Shop", path: "/"})
});

module.exports = router