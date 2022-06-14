using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace api_csharp.Controllers;

[ApiController]
[Route("image-processor")]
public class ImageProcessor : ControllerBase {

    [HttpGet]
    public OkObjectResult Get() {
        return Ok("Image Processor");
    }
}
