using SharpImage = SixLabors.ImageSharp.Image;

namespace ImageProcessor.Transformations;

class Resize : ITransformation {

    public SharpImage transform(SharpImage image) {
        return image;
    }
}