import sharp from "sharp";
import { ITransformation } from "./ITransformation";

class FlipVertical implements ITransformation {

    public transform(image: sharp.Sharp): sharp.Sharp {
        return image.flip()
    }
}

export { FlipVertical }