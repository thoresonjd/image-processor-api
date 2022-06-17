using SharpImage = SixLabors.ImageSharp.Image;

namespace ImageProcessor.Transformations;

class Grayscale : ITransformation {

    public Grayscale() {}

    public SharpImage transform(SharpImage image) {
        return image;
    }
}