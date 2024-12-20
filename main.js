"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
var port = 5000;
var userName = function (user) {
    return user.age >= 18;
};
var uzair = {
    name: "uzair",
    age: 15,
};
var isUzairAdult = userName(uzair);
isUzairAdult;
app.get("/", function (req, res) {
    res.send("Hello WOrld");
});
app.listen(port, function () {
    return console.log("App is running on port 5000");
});
