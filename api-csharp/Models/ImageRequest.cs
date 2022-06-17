namespace ImageProcessor.Models;

/// <summary>
/// ImageRequest
/// A model representing the JSON structure of a received POST request
/// The image and the list of transformations are contained in a request
/// </summary>
public class ImageRequest 
{
    public string image { get; set; } = string.Empty;

    public List<string> transformations { get; set; } = new List<string>();
}