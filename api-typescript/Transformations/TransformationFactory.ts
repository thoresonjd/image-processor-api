import { ITransformation } from './ITransformation';
import { FlipHorizontal } from './FlipHorizontal';

class TransformationFactory {

    public static getTransformation(transformation: string): ITransformation{
        return new FlipHorizontal();
    }
}

export { TransformationFactory }