const fs = require("fs")
const path = require("path");

const rootDir = require("../util/path")

const p = path.join(rootDir, "data", "products.json")

const getProductsFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if(err) {
            return cb([])
        }
        cb(JSON.parse(fileContent))
    })
}

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        getProductsFromFile((products) => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                if(err) {
                    console.log("ERROR", err);
                }
            })
        })
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
}