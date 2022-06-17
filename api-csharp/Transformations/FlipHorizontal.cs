using SixLabors.ImageSharp.Processing;
using SharpImage = SixLabors.ImageSharp.Image;

namespace ImageProcessor.Transformations;

/// <summary>
/// FlipHorizontal<br />
/// Implements the ITransformation interface<br />
/// Allows for an image to be flipped horizontally
/// </summary>
class FlipHorizontal : ITransformation 
{
    /// <summary>
    /// Performs a horizontal flip on an image
    /// </summary>
    /// <param name="image"></param>
    public void transform(ref SharpImage image) 
    {
        image.Mutate(x => x.Flip(FlipMode.Horizontal));
    }
}
