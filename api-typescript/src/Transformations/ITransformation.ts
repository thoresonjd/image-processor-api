import sharp from "sharp";

interface ITransformation {
    transform(image: sharp.Sharp): sharp.Sharp
}

export { ITransformation }