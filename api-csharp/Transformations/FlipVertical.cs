using SixLabors.ImageSharp.Processing;
using SharpImage = SixLabors.ImageSharp.Image;

namespace ImageProcessor.Transformations;

class FlipVertical : ITransformation {

    public FlipVertical() {}

    public void transform(ref SharpImage image) {
        image.Mutate(x => x.Flip(FlipMode.Vertical));
    }
}