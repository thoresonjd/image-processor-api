using SharpImage = SixLabors.ImageSharp.Image;

namespace ImageProcessor.Transformations;

class RotateRight : ITransformation {

    public RotateRight() {}

    public SharpImage transform(SharpImage image) {
        return image;
    }
}