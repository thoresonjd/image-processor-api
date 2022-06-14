using Microsoft.AspNetCore.Mvc;
using ImageProcessor.Models;

namespace api_csharp.Controllers;

[ApiController]
[Route("image-processor")]
public class ImageProcessorController : ControllerBase {

    [HttpGet]
    public ImageModel Get() {
        ImageModel response = new ImageModel();
        response.image = "ImageModel from ImageProcessor";
        return response;
    }

    // [HttpPost]
    // public ImageModel Post() {
    // }
}
