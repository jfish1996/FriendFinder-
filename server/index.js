//main server file

//requiring node package
var express = require("express");

//a functionality of the express package 
var app = express();


var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//importing our html routes
var { htmlRouter } = require("./routes/htmlRoutes");

//importing our api routes
var { apiRouter } = require("./routes/apiRoutes");

//using those routes
app.use("/", htmlRouter);

app.use("/api", apiRouter);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


