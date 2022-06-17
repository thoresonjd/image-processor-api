using SixLabors.ImageSharp.Processing;
using SharpImage = SixLabors.ImageSharp.Image;

namespace ImageProcessor.Transformations;

/// <summary>
/// Resize<br />
/// Implements the ITransormation interface<br />
/// Allows for an image to be resized
/// </summary>
class Resize : ITransformation 
{
    private uint width;

    private uint height;

    /// <summary>
    /// Constructor of the Resize command<br />
    /// Sets the width and height for the resize command
    /// </summary>
    /// <param name="width"></param>
    /// <param name="height"></param>
    public Resize(uint width, uint height) 
    {
        this.width = width;
        this.height = height;
    }

    /// <summary>
    /// Resizes an image
    /// </summary>
    /// <param name="image"></param>
    public void transform(ref SharpImage image) 
    {
        image.Mutate(x => x.Resize((int)this.width, (int)this.height));
    }
}