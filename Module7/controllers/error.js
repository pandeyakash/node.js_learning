exports.get404 = (req, res, next) => { // Default Route if some route is not found
    res.status(404).render("404", {docTitle: "Page Not Found", path:""}); //We can chain multiple methods with Response object
}