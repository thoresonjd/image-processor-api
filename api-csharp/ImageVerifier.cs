using Newtonsoft.Json;

namespace ImageProcessor;

/// <summary>
/// ImageVerifier<br />
/// Handles image verification
/// </summary>
class ImageVerifier 
{
    private Dictionary<string, string>? supportedTypes;

    /// <summary>
    /// Constructor if the ImageVerifier class<br />
    /// Initializes the dictionary of supported MIME types
    /// </summary>
    public ImageVerifier() 
    {
        string json = File.ReadAllText("MIMETypes.json");
        supportedTypes = JsonConvert.DeserializeObject<Dictionary<string, string>>(json);
    }

    /// <summary>
    /// Checks if an image has a supported MIME type
    /// </summary>
    /// <param name="image"></param>
    /// <returns>True if image is of a supported type, false otherwise</returns>
    public bool isSupportedImage(string image) 
    {
        foreach (string mimeType in supportedTypes!.Keys)
            if (image.StartsWith(mimeType))
                return true;
        return false;
    }
}
