using SixLabors.ImageSharp.Processing;
using SharpImage = SixLabors.ImageSharp.Image;

namespace ImageProcessor.Transformations;

class Grayscale : ITransformation {

    public Grayscale() {}

    public void  transform(ref SharpImage image) {
        image.Mutate(x => x.Grayscale());
    }
}