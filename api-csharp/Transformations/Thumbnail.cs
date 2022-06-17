using SharpImage = SixLabors.ImageSharp.Image;

namespace ImageProcessor.Transformations;

class Thumbnail : ITransformation {

    public Thumbnail() {}

    public SharpImage transform(SharpImage image) {
        return image;
    }
}