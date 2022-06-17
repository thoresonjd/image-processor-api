using SixLabors.ImageSharp.Processing;
using SharpImage = SixLabors.ImageSharp.Image;

namespace ImageProcessor.Transformations;

class Thumbnail : ITransformation {

    private const int MAX_SIZE = 100;

    public Thumbnail() {}

    public void transform(ref SharpImage image) {
        int width = MAX_SIZE;
        int height = MAX_SIZE;

        if (image.Width > image.Height) {
            int factor = image.Width/MAX_SIZE;
            height = image.Height/factor;
        } else if (image.Width < image.Height) {
            int factor = image.Height/MAX_SIZE;
            width = image.Width/factor;
        }

        image.Mutate(x => x.Resize(width, height));
    }
}