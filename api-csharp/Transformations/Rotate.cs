using SharpImage = SixLabors.ImageSharp.Image;

namespace ImageProcessor.Transformations;

class Rotate : ITransformation {

    public SharpImage transform(SharpImage image) {
        return image;
    }
}