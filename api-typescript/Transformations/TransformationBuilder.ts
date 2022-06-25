import { ITransformation } from "./ITransformation";
import { TransformationFactory } from "./TransformationFactory";

class TransformationBuilder {

    private transformations: Array<ITransformation>;

    constructor() {
        this.transformations = new Array<ITransformation>();
    }

    public buildTransformations(transformations: Array<string>): void {
        transformations.forEach(t => {
            let transformation = TransformationFactory.getTransformation(t);
            if (transformation)
                this.transformations.push(transformation);
        });
    }

    public getTransformations(): Array<ITransformation> {
        return [...this.transformations];
    }
}

export { TransformationBuilder }