import sharp from "sharp";
import { ITransformation } from "./ITransformation";

class Rotate implements ITransformation {

    private degrees: number;

    constructor(degrees: number) {
        this.degrees = degrees
    }

    public transform(image: sharp.Sharp): sharp.Sharp {
        return image.rotate(this.degrees);
    }
}

export { Rotate }