var htmlRouter = require("express").Router();
var path = require("path");

htmlRouter.route("/")
    .get(function(request, response){
        response.sendFile(path.join(__dirname, "../../assets/static/index.html"))

    })

htmlRouter.route("/survey")
    .get(function(request, response){
        response.sendFile(path.join(__dirname, "../../assets/static/survey.html"))

    })

module.exports = {
    htmlRouter
}