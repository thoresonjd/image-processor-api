using SixLabors.ImageSharp.Processing;
using SharpImage = SixLabors.ImageSharp.Image;

namespace ImageProcessor.Transformations;

class Saturate : ITransformation {

    private float saturation;

    public Saturate(float saturation) {
        this.saturation = saturation;
    }

    public void transform(ref SharpImage image) {
        if (saturation < 0)
            image.Mutate(x => x.Invert());
        image.Mutate(x => x.Saturate(saturation < 0 ? -saturation : saturation));
    }
}