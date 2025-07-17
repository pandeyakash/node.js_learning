const express = require("express");

const productController = require("../controllers/products")

const router = express.Router();

console.log("Shop File");


router.get("/", productController.getProducts);

module.exports = router