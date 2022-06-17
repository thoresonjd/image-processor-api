using SixLabors.ImageSharp.Processing;
using SharpImage = SixLabors.ImageSharp.Image;

namespace ImageProcessor.Transformations;

class Resize : ITransformation {

    private int width;

    private int height;

    public Resize(int width, int height) {
        this.width = width;
        this.height = height;
    }

    public void transform(ref SharpImage image) {
        image.Mutate(x => x.Resize(width, height));
    }
}