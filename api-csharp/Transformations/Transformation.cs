using SharpImage = SixLabors.ImageSharp.Image;

namespace ImageProcessor.Transformations;

interface ITransformation {
    SharpImage transform(Image image);
}