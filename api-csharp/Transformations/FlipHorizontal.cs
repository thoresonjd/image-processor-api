using SharpImage = SixLabors.ImageSharp.Image;

namespace ImageProcessor.Transformations;

class FlipHorizontal : ITransformation {

    public FlipHorizontal() {}

    public SharpImage transform(SharpImage image) {
        return image;
    }
}
