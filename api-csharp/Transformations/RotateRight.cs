using SixLabors.ImageSharp.Processing;
using SharpImage = SixLabors.ImageSharp.Image;

namespace ImageProcessor.Transformations;

/// <summary>
/// RotateRight<br />
/// Implements the ITransformation interface<br />
/// Allows for an image to be rotated 90 degrees clockwise
/// </summary>
class RotateRight : ITransformation 
{
    /// <summary>
    /// Rotates an image 90 degrees clockwise
    /// </summary>
    /// <param name="image"></param>
    public void transform(ref SharpImage image) 
    {
       image.Mutate(x => x.Rotate(RotateMode.Rotate90));
    }
}