using SharpImage = SixLabors.ImageSharp.Image;

namespace ImageProcessor.Transformations;

class FlipVertical : ITransformation {

    public SharpImage transform(SharpImage image) {
        return image;
    }
}