using SharpImage = SixLabors.ImageSharp.Image;

namespace ImageProcessor.Transformations;

class Rotate : ITransformation {

    public Rotate() {}

    public SharpImage transform(SharpImage image) {
        return image;
    }
}