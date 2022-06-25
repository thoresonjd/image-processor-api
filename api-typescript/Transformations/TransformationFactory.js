"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformationFactory = void 0;
const FlipHorizontal_1 = require("./FlipHorizontal");
const FlipVertical_1 = require("./FlipVertical");
const Resize_1 = require("./Resize");
const Rotate_1 = require("./Rotate");
class TransformationFactory {
    static getTransformation(transformation) {
        if (transformation === 'flip-horizontal')
            return new FlipHorizontal_1.FlipHorizontal();
        if (transformation === 'flip-vertical')
            return new FlipVertical_1.FlipVertical();
        if (/resize\(\d+,\d+\)/.test(transformation)) {
            let dimensions = transformation
                .substring(transformation.indexOf('(') + 1, transformation.indexOf(')'))
                .split(',');
            let width = parseInt(dimensions[0]);
            let height = parseInt(dimensions[1]);
            return new Resize_1.Resize(width, height);
        }
        if (/rotate\(-?([0-9]*[.])?[0-9]+\)/.test(transformation)) {
            let degrees = parseFloat(transformation
                .substring(transformation.indexOf('(') + 1, transformation.indexOf(')')));
            return new Rotate_1.Rotate(degrees);
        }
        return null;
    }
}
exports.TransformationFactory = TransformationFactory;
