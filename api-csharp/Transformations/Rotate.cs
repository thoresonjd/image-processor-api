using SixLabors.ImageSharp.Processing;
using SharpImage = SixLabors.ImageSharp.Image;

namespace ImageProcessor.Transformations;

/// <summary>
/// Rotate<br />
/// Implements the ITransformation interface<br />
/// Allows for an image to be rotated by specified degrees
/// </summary>
class Rotate : ITransformation 
{
    private float degrees;

    /// <summary>
    /// Constructor of the Rotate command<br />
    /// Sets the degrees for rotation
    /// </summary>
    /// <param name="degrees"></param>
    public Rotate(float degrees) 
    {
        this.degrees = degrees;
    }

    /// <summary>
    /// Performs a rotation of specified degrees on an image
    /// </summary>
    /// <param name="image"></param>
    public void transform(ref SharpImage image) 
    {
        image.Mutate(x => x.Rotate(this.degrees));
    }
}