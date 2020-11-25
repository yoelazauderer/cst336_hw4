/*global faker*/
/*global res*/


const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

var faker = require('faker');
var randomCompanyName = faker.company.companyName();


//routes
app.get("/", function(req, res){
    res.render("index.html", {"randomCompanyName": randomCompanyName});
});

app.get("/java", function(req, res){
    res.render("java.html", {"randomCompanyName": randomCompanyName});
});

app.get("/c\\+\\+", function(req, res){
    res.render("c++.html", {"randomCompanyName": randomCompanyName});
});

app.get("/python", function(req, res){
    res.render("python.html", {"randomCompanyName": randomCompanyName});
});

//starting server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});