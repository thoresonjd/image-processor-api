using SharpImage = SixLabors.ImageSharp.Image;

namespace ImageProcessor.Transformations;

class Saturate : ITransformation {

    public Saturate() {}

    public SharpImage transform(SharpImage image) {
        return image;
    }
}