using SharpImage = SixLabors.ImageSharp.Image;

namespace ImageProcessor.Transformations;

class GrayscalePercentage : ITransformation {

    public SharpImage transform(SharpImage image) {
        return image;
    }
}