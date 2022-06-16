using Microsoft.AspNetCore.Mvc;
using ImageProcessor.Models;

namespace ImageProcessor.Controllers;

[ApiController]
[Route("image-processor")]
public class ImageProcessorController : ControllerBase {

    [HttpGet]
    public ObjectResult Get() {
        ImageResponse response = new ImageResponse();
        response.image = "A string representation of a base64 encoded image will appear here";
        return Ok(response);
    }

    [HttpPost]
    public ObjectResult ProcessImage([FromBody] ImageRequest request) {
        
        
        for (int i = 0; i < request.transformations.Count; i++) {
            Console.WriteLine(request.transformations[i]);
        }

        ImageResponse response = new ImageResponse();
        response.image = request.image;
        return Ok(response);
    }
}
