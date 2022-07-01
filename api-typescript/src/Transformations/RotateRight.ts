import sharp from "sharp";
import { ITransformation } from "./ITransformation";

class RotateRight implements ITransformation {

    public transform(image: sharp.Sharp): sharp.Sharp {
        return image.rotate(90);
    }
}

export { RotateRight }