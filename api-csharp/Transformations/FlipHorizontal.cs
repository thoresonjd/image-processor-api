using SharpImage = SixLabors.ImageSharp.Image;

namespace ImageProcessor.Transformations;

class FlipHorizontal : ITransformation {

    public SharpImage transform(SharpImage image) {
        return image;
    }
}
