import sharp from "sharp";
import { ITransformation } from "./ITransformation";

class FlipHorizontal implements ITransformation {

    public transform(image: sharp.Sharp): sharp.Sharp {
        return image.flop()
    }
}

export { FlipHorizontal }