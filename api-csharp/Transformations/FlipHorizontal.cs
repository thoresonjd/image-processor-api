using SixLabors.ImageSharp.Processing;
using SharpImage = SixLabors.ImageSharp.Image;

namespace ImageProcessor.Transformations;

class FlipHorizontal : ITransformation {

    public FlipHorizontal() {}

    public void transform(ref SharpImage image) {
        image.Mutate(x => x.Flip(FlipMode.Horizontal));
    }
}
