"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageVerifier = void 0;
const MIMETypes_json_1 = __importDefault(require("./MIMETypes.json"));
class ImageVerifier {
    constructor() {
        this.supportedTypes = MIMETypes_json_1.default;
    }
    isSupportedImage(image) {
        for (let mimeType in this.supportedTypes)
            if (image.startsWith(mimeType))
                return true;
        return false;
    }
}
exports.ImageVerifier = ImageVerifier;
