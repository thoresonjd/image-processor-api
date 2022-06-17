using SixLabors.ImageSharp.Processing;
using SharpImage = SixLabors.ImageSharp.Image;

namespace ImageProcessor.Transformations;

/// <summary>
/// Thumbnail<br />
/// Implements the ITransformation interface<br />
/// Allows for an image to be converted to a thumbnail
/// </summary>
class Thumbnail : ITransformation 
{
    private const int MAX_SIZE = 100;

    /// <summary>
    /// Creates a thumbnail of an image
    /// </summary>
    /// <param name="image"></param>
    public void transform(ref SharpImage image) 
    {
        int width = image.Width < image.Height ? image.Width/(image.Height/MAX_SIZE) : MAX_SIZE;
        int height = image.Width > image.Height ? image.Height/(image.Width/MAX_SIZE) : MAX_SIZE;
        image.Mutate(x => x.Resize(width, height));
    }
}