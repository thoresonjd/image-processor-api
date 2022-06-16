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
        
        foreach (string transformation in request.transformations) {
            Console.WriteLine(transformation);
        }

        if (string.IsNullOrEmpty(request.image))
            return BadRequest("ERROR: No image provided");

        ImageVerifier imageVerifier = new ImageVerifier();
        if(!imageVerifier.isSupportedImage(request.image))
            return BadRequest("ERROR: Unsupported media type");

        ImageResponse response = new ImageResponse();
        response.image = request.image;
        return Ok(response);
    }
}
