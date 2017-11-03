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
    res.send("EAAAAUaZA8jlABAO3tOGShM7iZBqHWxufq74esLxbkwCvSArz7asZCFRacK1H4Ikn8KhbXtJsJUy9ZBZB40qS7HMAmLWkKZBSYZBGQ1PVDPEEG7NYHUHqhkFFyCjZAmOBw1C7b2mMkW9W11ZBFYK28qWPOOw3FS2SOOvoZD");
});