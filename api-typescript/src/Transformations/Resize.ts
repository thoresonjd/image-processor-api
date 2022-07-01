import sharp from "sharp";
import { ITransformation } from "./ITransformation";

class Resize implements ITransformation {

    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    public transform(image: sharp.Sharp): sharp.Sharp {
        return image.resize(this.width, this.height, { fit: 'fill' });
    }
}

export { Resize }