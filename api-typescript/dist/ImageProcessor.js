"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageProcessor = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const Image_1 = require("./Image");
const ImageVerifier_1 = require("./ImageVerifier");
const options = {
    origin: '*'
};
class ImageProcessor {
    constructor() {
        this.expressApp = (0, express_1.default)();
        this.middleware();
        this.endpoints();
    }
    middleware() {
        this.expressApp.use(body_parser_1.default.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
        this.expressApp.use(body_parser_1.default.json({ limit: '50mb' }));
        this.expressApp.use((0, cors_1.default)(options));
    }
    endpoints() {
        this.expressApp.post('/image-processor/', (req, res) => {
            // Check if image exists
            if (!req.body['image'] || typeof req.body['image'] === 'undefined')
                res.status(400).send("ERROR: No image provided");
            // Check if image is of supported type
            let imageVerifier = new ImageVerifier_1.ImageVerifier();
            if (!imageVerifier.isSupportedImage(req.body['image']))
                res.status(400).send("ERROR: Unsupported media type");
            // Transform image
            let image = new Image_1.Image(req.body['image']);
            image.transform(req.body['transformations']);
            let transformedImage = image.getImage();
            // Send image response
            transformedImage.then(result => res.status(200).json({ "image": result }));
        });
        this.expressApp.get('/image-processor/', (req, res) => {
            res.send("ImageProcessor running");
        });
    }
    getApp() {
        return this.expressApp;
    }
}
exports.ImageProcessor = ImageProcessor;
