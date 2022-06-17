using SixLabors.ImageSharp.Processing;
using SharpImage = SixLabors.ImageSharp.Image;

namespace ImageProcessor.Transformations;

/// <summary>
/// Saturate<br />
/// Implements the ITransformation interface<br />
/// Allows for an image to be saturated or desaturated
/// </summary>
class Saturate : ITransformation 
{
    private float saturation;

    /// <summary>
    /// Constructor of the Saturate command<br />
    /// Sets the saturation value for the Saturate command
    /// </summary>
    /// <param name="saturation"></param>
    public Saturate(float saturation) 
    {
        this.saturation = saturation;
    }

    /// <summary>
    /// Saturates an image
    /// </summary>
    /// <param name="image"></param>
    public void transform(ref SharpImage image) 
    {
        if (saturation < 0)
            image.Mutate(x => x.Invert());
        image.Mutate(x => x.Saturate(saturation < 0 ? -saturation : saturation));
    }
}