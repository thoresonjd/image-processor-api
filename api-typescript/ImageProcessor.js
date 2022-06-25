"use strict";
exports.__esModule = true;
exports.ImageProcessor = void 0;
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var options = {
    origin: '*'
};
var ImageProcessor = /** @class */ (function () {
    function ImageProcessor() {
        this.expressApp = express();
        this.middleware();
        this.endpoints();
    }
    ImageProcessor.prototype.middleware = function () {
        this.expressApp.use(bodyParser.urlencoded({ extended: true }));
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(cors(options));
    };
    ImageProcessor.prototype.endpoints = function () {
        this.expressApp.post('/image-processor/', function (req, res) {
            var data = req.body;
            console.log(data);
            res.send(data);
        });
        this.expressApp.get('/image-processor/', function (req, res) {
            res.send("ImageProcessor running");
        });
    };
    ImageProcessor.prototype.getApp = function () {
        return this.expressApp;
    };
    return ImageProcessor;
}());
exports.ImageProcessor = ImageProcessor;
