"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rotate = void 0;
class Rotate {
    constructor(degrees) {
        this.degrees = degrees;
    }
    transform(image) {
        return image.rotate(this.degrees);
    }
}
exports.Rotate = Rotate;
