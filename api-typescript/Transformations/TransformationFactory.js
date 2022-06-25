"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformationFactory = void 0;
const FlipHorizontal_1 = require("./FlipHorizontal");
class TransformationFactory {
    static getTransformation(transformation) {
        return new FlipHorizontal_1.FlipHorizontal();
    }
}
exports.TransformationFactory = TransformationFactory;
