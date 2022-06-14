using Microsoft.AspNetCore.Mvc;
using ImageProcessor.Models;

namespace ImageProcessor.Controllers;

[ApiController]
[Route("image-processor")]
public class ImageProcessorController : ControllerBase {

    [HttpGet]
    public ObjectResult Get() {
        ImageModel response = new ImageModel();
        response.image = "ImageModel from ImageProcessor";
        return Ok(response);
    }

    // [HttpPost]
    // public ObjectResult Post() {
    // }
}
