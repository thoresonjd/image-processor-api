import sharp from "sharp";
import { ITransformation } from "./ITransformation";

class RotateLeft implements ITransformation {

    public transform(image: sharp.Sharp): sharp.Sharp {
        return image.rotate(-90);
    }
}

export { RotateLeft }