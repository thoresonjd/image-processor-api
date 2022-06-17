using SharpImage = SixLabors.ImageSharp.Image;

namespace ImageProcessor.Transformations;

class RotateLeft : ITransformation {

    public RotateLeft() {}

    public SharpImage transform(SharpImage image) {
        return image;
    }
}