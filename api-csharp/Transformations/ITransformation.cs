using SharpImage = SixLabors.ImageSharp.Image;

namespace ImageProcessor.Transformations;

/// <summary>
/// ITransformation
/// An interface that allows image transformations
/// </summary>
interface ITransformation 
{
    /// <summary>
    /// Performs a transformation on an image
    /// </summary>
    /// <param name="image"></param>
    void transform(ref SharpImage image);
}