var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("./public"));
app.set("view engine", "ejs");
app.set("views", "./views");

var server = require("http").Server(app);
server.listen(process.env.PORT || 2010);

app.get("/", function(req, res) {
    res.render("index");
});

app.get("/access", function(req, res) {
    res.send("EAAAAUaZA8jlABAMYYeuiyQVQk4fMQ2ys26URLQCq5wVW1SIIcb39ZCm4WKwq23RZCQr26Cdj39LZCLjGofCNMprDWeSTBlTNQBmES4p03d13Vl4gUI8hzHEkbgzZCQkNTgoLXYmDhZC684cAOcdujUtut8DYaztRYs4QtWXy9ZBLgZDZD");
});