import { ITransformation } from './ITransformation';
import { FlipHorizontal } from './FlipHorizontal';
import { FlipVertical } from './FlipVertical';
import { Resize } from './Resize';
import { Rotate } from './Rotate';

class TransformationFactory {

    public static getTransformation(transformation: string): ITransformation | null {
        if (transformation === 'flip-horizontal')
            return new FlipHorizontal();
        if (transformation === 'flip-vertical')
            return new FlipVertical();
        if (/resize\(\d+,\d+\)/.test(transformation)) {
            let dimensions = transformation
                .substring(transformation.indexOf('(') + 1, transformation.indexOf(')'))
                .split(',');
            let width = parseInt(dimensions[0]);
            let height = parseInt(dimensions[1]);
            return new Resize(width, height);
        }
        if (/rotate\(-?([0-9]*[.])?[0-9]+\)/.test(transformation)) {
            let degrees = parseFloat(transformation
                .substring(transformation.indexOf('(') + 1, transformation.indexOf(')')));
            return new Rotate(degrees);
        }
        return null;
    }
}

export { TransformationFactory }