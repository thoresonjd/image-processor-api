namespace ImageProcessor.Models;

public class ImageRequest {
    
    public string? image { get; set; }

    public List<string>? transformations { get; set; }
}