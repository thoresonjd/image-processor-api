using SixLabors.ImageSharp.Processing;
using SharpImage = SixLabors.ImageSharp.Image;

namespace ImageProcessor.Transformations;

class Rotate : ITransformation {

    private float degrees;

    public Rotate(float degrees) {
        this.degrees = degrees;
    }

    public void transform(ref SharpImage image) {
        image.Mutate(x => x.Rotate(degrees));
    }
}