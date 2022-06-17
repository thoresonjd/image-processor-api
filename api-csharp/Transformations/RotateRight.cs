using SharpImage = SixLabors.ImageSharp.Image;

namespace ImageProcessor.Transformations;

class RotateRight : ITransformation {

    public SharpImage transform(SharpImage image) {
        return image;
    }
}