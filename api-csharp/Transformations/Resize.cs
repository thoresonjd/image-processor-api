using SixLabors.ImageSharp.Processing;
using SharpImage = SixLabors.ImageSharp.Image;

namespace ImageProcessor.Transformations;

class Resize : ITransformation {

    private uint width;

    private uint height;

    public Resize(uint width, uint height) {
        this.width = width;
        this.height = height;
    }

    public void transform(ref SharpImage image) {
        image.Mutate(x => x.Resize((int)width, (int)height));
    }
}