using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Formats;
using SharpImage = SixLabors.ImageSharp.Image;
using ImageProcessor.Transformations;

namespace ImageProcessor;

class Image {

    private SharpImage image;
    
    private IImageFormat? format;

    public Image(string image) {
        this.image = decode(image);
    }

    private SharpImage decode(string image) {
        byte[] imageBytes = Convert.FromBase64String(image);
        SharpImage sharpImage = SharpImage.Load(imageBytes, out format);
        return sharpImage;
    }

    private string encode() {
        MemoryStream imageStream = new MemoryStream();
        this.image.Save(imageStream, format);
        byte[] imageBytes = imageStream.ToArray();
        string base64String = Convert.ToBase64String(imageBytes);
        return base64String;
    }

    public void transform(List<string> transformations) {
        TransformationBuilder tb = new TransformationBuilder();
        tb.buildTransformations(transformations);
        List<ITransformation> tfs = tb.getTransformations();
        foreach(ITransformation transformation in tfs)
            transformation.transform(ref this.image);
    }

    public string getImage() {
        return encode();
    }
}
