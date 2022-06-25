"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformationFactory = void 0;
const FlipHorizontal_1 = require("./FlipHorizontal");
const FlipVertical_1 = require("./FlipVertical");
class TransformationFactory {
    static getTransformation(transformation) {
        if (transformation === 'flip-vertical')
            return new FlipVertical_1.FlipVertical();
        return new FlipHorizontal_1.FlipHorizontal();
    }
}
exports.TransformationFactory = TransformationFactory;
