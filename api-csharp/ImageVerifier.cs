using Newtonsoft.Json;

namespace ImageProcessor;

class ImageVerifier {

    private Dictionary<string, string>? supportedTypes;

    public ImageVerifier() {
        string json = File.ReadAllText("MIMETypes.json");
        supportedTypes = JsonConvert.DeserializeObject<Dictionary<string, string>>(json);
    }

    public bool isSupportedImage(string image) {
        foreach (string mimeType in supportedTypes!.Keys)
            if (image.StartsWith(mimeType))
                return true;
        return false;
    }
}
