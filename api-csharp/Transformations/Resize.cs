using SharpImage = SixLabors.ImageSharp.Image;

namespace ImageProcessor.Transformations;

class Resize : ITransformation {

    public Resize() {}

    public SharpImage transform(SharpImage image) {
        return image;
    }
}