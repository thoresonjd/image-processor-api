import { ITransformation } from './ITransformation';
import { FlipHorizontal } from './FlipHorizontal';
import { FlipVertical } from './FlipVertical';

class TransformationFactory {

    public static getTransformation(transformation: string): ITransformation {
        if (transformation === 'flip-vertical')
            return new FlipVertical();
        return new FlipHorizontal();
    }
}

export { TransformationFactory }