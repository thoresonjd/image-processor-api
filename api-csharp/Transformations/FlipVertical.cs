using SixLabors.ImageSharp.Processing;
using SharpImage = SixLabors.ImageSharp.Image;

namespace ImageProcessor.Transformations;

/// <summary>
/// FlipVertical<br />
/// Implements the ITransformation interface<br />
/// Allows for an image to be flipped vertically
/// </summary>
class FlipVertical : ITransformation 
{
    /// <summary>
    /// Performs a vertical flip on an image
    /// </summary>
    /// <param name="image"></param>
    public void transform(ref SharpImage image)
    {
        image.Mutate(x => x.Flip(FlipMode.Vertical));
    }
}