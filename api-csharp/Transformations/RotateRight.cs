using SixLabors.ImageSharp.Processing;
using SharpImage = SixLabors.ImageSharp.Image;

namespace ImageProcessor.Transformations;

class RotateRight : ITransformation {

    public RotateRight() {}

    public void transform(ref SharpImage image) {
       image.Mutate(x => x.Rotate(RotateMode.Rotate90));
    }
}