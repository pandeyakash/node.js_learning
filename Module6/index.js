// const http = require("http");
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
// const expressHbs = require("express-handlebars")

const app = express();

// app.set("view engine", "pug"); //Pug is kind of built-in to express
// app.engine("hbs", expressHbs())
// app.set("view engine", "hbs");
app.set("view engine", "ejs")
app.set("views", "views");

// Creates an express Application

const adminData = require("./routes/admin")
const shopRoutes = require("./routes/shop")

app.use(bodyParser.urlencoded({extended: false})) //Parses the request body sent through a form.Doesn't parses files, JSON
app.use(express.static(path.join(__dirname, "public")))

app.use('/admin', adminData.routes); //common Path
app.use(shopRoutes);

// app.use((req, res, next) => { // app.use() is used to create middleware.
//     console.log("In the Middleware");
//     next(); //Allows the request to continue to the next middleware in line
// });

// const server = http.createServer(app); //The app object can also work as a request handler. But it handles the request in a different way.

// server.listen(3000);

app.use((req, res, next) => { // Default Route if some route is not found
    res.status(404).render("404", {docTitle: "Page Not Found"}); //We can chain multiple methods with Response object
})

app.listen(3000);