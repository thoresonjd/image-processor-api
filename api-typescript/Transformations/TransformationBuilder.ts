import { ITransformation } from "./ITransformation";
import { TransformationFactory } from "./TransformationFactory";

class TransformationBuilder {

    private transformations: Array<ITransformation>;

    constructor() {
        this.transformations = new Array<ITransformation>();
    }

    public buildTransformations(transformations: Array<string>): void {
        transformations.forEach(transformation =>
            this.transformations.push(TransformationFactory.getTransformation(transformation))
        );
    }

    public getTransformations(): Array<ITransformation> {
        return [...this.transformations];
    }
}

export { TransformationBuilder }