using SixLabors.ImageSharp.Processing;
using SharpImage = SixLabors.ImageSharp.Image;

namespace ImageProcessor.Transformations;

/// <summary>
/// RotateLeft<br />
/// Implements the ITransformation interface<br />
/// Allows for an image to be rotated 90 degrees counter-clockwise
/// </summary>
class RotateLeft : ITransformation 
{
    /// <summary>
    /// Rotates an image 90 degrees counter-clockwise
    /// </summary>
    /// <param name="image"></param>
    public void transform(ref SharpImage image) 
    {
        image.Mutate(x => x.Rotate(RotateMode.Rotate270));
    }
}