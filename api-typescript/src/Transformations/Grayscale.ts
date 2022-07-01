import sharp from "sharp";
import { ITransformation } from "./ITransformation";

class Grayscale implements ITransformation {

    public transform(image: sharp.Sharp): sharp.Sharp {
        return image.grayscale();
    }
}

export { Grayscale }