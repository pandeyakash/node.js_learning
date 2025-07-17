const path = require("path")

const express = require("express");

const rootDir = require("../util/path")

const router = express.Router();

console.log("Shop File");


router.get("/", (req, res, next) => { // app.use() is used to create middleware.
    res.sendFile(path.join(rootDir, "views", "shop.html")) // Automaticaaly sets "Content-Type" header
});

module.exports = router