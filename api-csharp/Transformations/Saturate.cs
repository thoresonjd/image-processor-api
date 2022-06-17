using SharpImage = SixLabors.ImageSharp.Image;

namespace ImageProcessor.Transformations;

class Saturate : ITransformation {

    public SharpImage transform(SharpImage image) {
        return image;
    }
}