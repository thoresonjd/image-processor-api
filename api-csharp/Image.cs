using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Formats;
using SharpImage = SixLabors.ImageSharp.Image;
using ImageProcessor.Transformations;

namespace ImageProcessor;

/// <summary>
/// Image<br />
/// A wrapper class that allows image transformations
/// </summary>
class Image 
{
    private SharpImage image;
    
    private IImageFormat? format;

    /// <summary>
    /// Constructor of the Image class<br />
    /// Converts an image from Base64 to an ImageSharp Image
    /// </summary>
    /// <param name="image"></param>
    public Image(string image) 
    {
        this.image = decode(image);
    }

    /// <summary>
    /// Decodes a Base64 string representation of an image to an ImageSharp Image
    /// </summary>
    /// <param name="image"></param>
    /// <returns>An ImageSharp Image object</returns>
    private SharpImage decode(string image) 
    {
        byte[] imageBytes = Convert.FromBase64String(image);
        SharpImage sharpImage = SharpImage.Load(imageBytes, out format);
        return sharpImage;
    }

    /// <summary>
    /// Encodes an ImageSharp Image to a Base64 string representation of an image
    /// </summary>
    /// <returns>A Base64 string representation of an image</returns>
    private string encode() 
    {
        MemoryStream imageStream = new MemoryStream();
        this.image.Save(imageStream, format);
        byte[] imageBytes = imageStream.ToArray();
        string base64String = Convert.ToBase64String(imageBytes);
        return base64String;
    }

    /// <summary>
    /// Performs transformations on the underlying image
    /// </summary>
    /// <param name="transformations"></param>
    public void transform(List<string> transformations) 
    {
        TransformationBuilder tb = new TransformationBuilder();
        tb.buildTransformations(transformations);
        List<ITransformation> tfs = tb.getTransformations();
        foreach(ITransformation transformation in tfs)
            transformation.transform(ref this.image);
    }

    /// <summary>
    /// Encodes and retrieves the image in Base64
    /// </summary>
    /// <returns>A Base64 string representation of an image</returns>
    public string getImage() 
    {
        return encode();
    }
}
