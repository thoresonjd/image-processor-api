"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resize = void 0;
class Resize {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    transform(image) {
        return image.resize(this.width, this.height, { fit: 'fill' });
    }
}
exports.Resize = Resize;
