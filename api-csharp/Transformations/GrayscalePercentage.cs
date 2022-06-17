using SixLabors.ImageSharp.Processing;
using SharpImage = SixLabors.ImageSharp.Image;

namespace ImageProcessor.Transformations;

class GrayscalePercentage : ITransformation {

    private float percentage;

    public GrayscalePercentage(float percentage) {
        this.percentage = percentage;
    }

    public void transform(ref SharpImage image) {
        image.Mutate(x => x.Grayscale(percentage));
    }
}