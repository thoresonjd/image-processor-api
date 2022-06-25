"use strict";
exports.__esModule = true;
var ImageProcessor_1 = require("./ImageProcessor");
var app = new ImageProcessor_1.ImageProcessor().getApp();
var PORT = 2022;
app.listen(PORT, function () { return console.log("ImageProcessor listening on port ".concat(PORT)); });
