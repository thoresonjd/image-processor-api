<h1 align="center">Image Processor API</h1>

An image processor API created with emphasis on architectural design patterns. The API utilizes HTTP POST requests to perform transformations on images. A client will send an image and a list of transformation requests in the form of JSON to the API. The API will perform the specified transformations on the image and send the transformed image back to the client via JSON.

## Design Document 

[Image Processor API]("./ImageProcessorAPI.docx")

## Commands

The image processor API is capable of performing he following commands:
* Flip Horizontal
* Flip Vertical
* Resize
* Rotate _**n**_ degrees
* Rotate Left (90 degrees counter-clockwise)
* Rotate Right (90 degrees clockwise)
* Thumbnail Generation
* Grayscale (default)
* Grayscale by Percentage
* Saturate/Desaturate
