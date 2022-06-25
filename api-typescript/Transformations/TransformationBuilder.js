"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformationBuilder = void 0;
const TransformationFactory_1 = require("./TransformationFactory");
class TransformationBuilder {
    constructor() {
        this.transformations = new Array();
    }
    buildTransformations(transformations) {
        transformations.forEach(t => {
            let transformation = TransformationFactory_1.TransformationFactory.getTransformation(t);
            if (transformation)
                this.transformations.push(transformation);
        });
    }
    getTransformations() {
        return [...this.transformations];
    }
}
exports.TransformationBuilder = TransformationBuilder;
