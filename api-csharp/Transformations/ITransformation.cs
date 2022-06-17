using SharpImage = SixLabors.ImageSharp.Image;

namespace ImageProcessor.Transformations;

interface ITransformation {
    void transform(ref SharpImage image);
}