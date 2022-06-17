using SharpImage = SixLabors.ImageSharp.Image;

namespace ImageProcessor.Transformations;

class GrayscalePercentage : ITransformation {

    public GrayscalePercentage() {}

    public SharpImage transform(SharpImage image) {
        return image;
    }
}