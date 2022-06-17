using SixLabors.ImageSharp.Processing;
using SharpImage = SixLabors.ImageSharp.Image;

namespace ImageProcessor.Transformations;

/// <summary>
/// Grayscale<br />
/// Implements the ITransformation interface<br />
/// Allows for an image to be converted to grayscale
/// </summary>
class Grayscale : ITransformation 
{
    /// <summary>
    /// Converts an image to grayscale
    /// </summary>
    /// <param name="image"></param>
    public void transform(ref SharpImage image) 
    {
        image.Mutate(x => x.Grayscale());
    }
}