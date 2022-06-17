using SixLabors.ImageSharp.Processing;
using SharpImage = SixLabors.ImageSharp.Image;

namespace ImageProcessor.Transformations;

class RotateLeft : ITransformation {

    public RotateLeft() {}

    public void transform(ref SharpImage image) {
        image.Mutate(x => x.Rotate(RotateMode.Rotate270));
    }
}