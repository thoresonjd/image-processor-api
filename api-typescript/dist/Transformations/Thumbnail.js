"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Thumbnail = void 0;
class Thumbnail {
    constructor() {
        this.MAX_SIZE = 100;
    }
    transform(image) {
        return image.resize(this.MAX_SIZE, this.MAX_SIZE, { fit: 'inside' });
    }
}
exports.Thumbnail = Thumbnail;
