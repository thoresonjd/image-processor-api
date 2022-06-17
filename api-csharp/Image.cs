using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Formats;
using SharpImage = SixLabors.ImageSharp.Image;

namespace ImageProcessor;

class Image {

    private SharpImage image;
    
    private IImageFormat? format;

    private Image(string image) {
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

    public void transformImage() {
        return;
    }

    public string getImage() {
        return encode();
    }
}
