using SixLabors.ImageSharp.Processing;
using SharpImage = SixLabors.ImageSharp.Image;

namespace ImageProcessor.Transformations;

/// <summary>
/// GrayscalePercentage<br />
/// Implements the ITransformation interface<br />
/// Allows for an image to be converted to a specified grayscale
/// </summary>
class GrayscalePercentage : ITransformation 
{
    private float percentage;

    /// <summary>
    /// Constructor of the GrayscalePercentage command<br />
    /// Sets the percentage value for grayscale
    /// </summary>
    /// <param name="percentage"></param>
    public GrayscalePercentage(float percentage) 
    {
        this.percentage = percentage;
    }

    /// <summary>
    /// Converts an image to a specified grayscale
    /// </summary>
    /// <param name="image"></param>
    public void transform(ref SharpImage image) 
    {
        image.Mutate(x => x.Grayscale(this.percentage));
    }
}