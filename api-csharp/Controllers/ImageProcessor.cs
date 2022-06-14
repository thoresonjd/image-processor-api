using Microsoft.AspNetCore.Mvc;

namespace api_csharp.Controllers;

[ApiController]
[Route("[controller]")]
public class ImageProcessor : ControllerBase {

    private readonly ILogger<ImageProcessor> _logger;

    public ImageProcessor(ILogger<ImageProcessor> logger) {
        _logger = logger;
    }
}
