import sharp from 'sharp';

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

    public transform(transformations: string[]): void {
        for (let transformation of transformations)
            console.log(transformation)
    }

    public async getImage(): Promise<string> {
        return await this.encode()
    }
}

export { Image }