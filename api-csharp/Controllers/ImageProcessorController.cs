using Microsoft.AspNetCore.Mvc;
using ImageProcessor.Models;

namespace ImageProcessor.Controllers;

[ApiController]
[Route("image-processor")]
public class ImageProcessorController : ControllerBase {

    [HttpPost]
    public ObjectResult ProcessImage([FromBody] ImageRequest request) {
        if (string.IsNullOrEmpty(request.image))
            return BadRequest("ERROR: No image provided");

        ImageVerifier imageVerifier = new ImageVerifier();
        if(!imageVerifier.isSupportedImage(request.image))
            return BadRequest("ERROR: Unsupported media type");

        Image image = new Image(request.image);
        image.transform(request.transformations);
        string transformedImage = image.getImage();

        ImageResponse response = new ImageResponse();
        response.image = transformedImage;
        return Ok(response);
    }

    [HttpGet]
    public ObjectResult Get() {
        return Ok("The image processor API is running here.");
    }
}
