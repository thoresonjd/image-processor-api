import sharp from 'sharp';
import { ITransformation } from './Transformations/ITransformation';
import { TransformationBuilder } from './Transformations/TransformationBuilder';

class Image {

    private image: sharp.Sharp;

    constructor(image: string) {
        this.image = this.decode(image);
    }

    private decode(image: string): sharp.Sharp {
        return sharp(Buffer.from(image, 'base64'));
    }

    private async encode(): Promise<string> {
        return await this.image.toBuffer().then(result => result.toString('base64'));
    }

    public transform(transformations: Array<string>): void {
        let transformationBuilder: TransformationBuilder = new TransformationBuilder();
        transformationBuilder.buildTransformations(transformations);
        let tfs: Array<ITransformation> = transformationBuilder.getTransformations();
        tfs.forEach(t => this.image = t.transform(this.image));
    }

    public async getImage(): Promise<string> {
        return await this.encode()
    }
}

export { Image }