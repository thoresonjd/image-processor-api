using Microsoft.AspNetCore.Mvc;
using ImageProcessor.Models;

namespace ImageProcessor.Controllers;

/// <summary>
/// ImageProcessorController<br />
/// Handles image processing when CRUD through HTTP requests are invoked
/// </summary>
[ApiController]
[Route("image-processor")]
public class ImageProcessorController : ControllerBase 
{
    /// <summary>
    /// Processes an image upon a POST request to the image processor
    /// </summary>
    /// <param name="request"></param>
    /// <returns>An HTTP reponse containing the transformed image</returns>
    [HttpPost]
    public ObjectResult ProcessImage([FromBody] ImageRequest request) 
    {
        // Check if image exists
        if (string.IsNullOrEmpty(request.image))
            return BadRequest("ERROR: No image provided");

        // Check if image is of supported type
        ImageVerifier imageVerifier = new ImageVerifier();
        if(!imageVerifier.isSupportedImage(request.image))
            return BadRequest("ERROR: Unsupported media type");

        // Transform the image
        Image image = new Image(request.image);
        image.transform(request.transformations);
        string transformedImage = image.getImage();

        // Return an image response
        ImageResponse response = new ImageResponse();
        response.image = transformedImage;
        return Ok(response);
    }

    /// <summary>
    /// A simple GET that identifies the image processor
    /// </summary>
    /// <returns>An HTTP response identifying the image processor</returns>
    [HttpGet]
    public ObjectResult Get() 
    {
        return Ok("The image processor API is running here.");
    }
}
