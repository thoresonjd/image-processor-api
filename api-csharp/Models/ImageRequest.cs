namespace ImageProcessor.Models;

public class ImageRequest {
    
    public string image { get; set; } = string.Empty;

    public List<string> transformations { get; set; } = new List<string>();
}