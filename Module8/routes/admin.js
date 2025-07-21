const path= require("path")

const express = require("express");

const adminController = require("../controllers/admin")

const router = express.Router();

// /admin/add-products -> GET
router.get("/add-products", adminController.getAddProducts);

// /admin/add-products -> POST
router.post("/add-products", adminController.postAddProducts);

router.get("/products", adminController.getProducts);

// module.exports = router;

module.exports = router;