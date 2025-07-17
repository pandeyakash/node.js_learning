const path= require("path")

const express = require("express");

const productController = require("../controllers/products")

const router = express.Router();

// /admin/add-products -> GET
router.get("/add-products", productController.getAddProducts);

// /admin/add-products -> POST
router.post("/add-products", productController.postAddProducts);

// module.exports = router;

module.exports = router;