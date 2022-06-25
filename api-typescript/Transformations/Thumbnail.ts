import sharp from "sharp";
import { ITransformation } from "./ITransformation";

class Thumbnail implements ITransformation {

    private MAX_SIZE = 100;

    public transform(image: sharp.Sharp): sharp.Sharp {
        return image.resize(this.MAX_SIZE, this.MAX_SIZE, { fit: 'inside'} );
    }
}

export { Thumbnail }