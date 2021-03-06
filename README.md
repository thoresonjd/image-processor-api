<h1 align="center">Image Processor API</h1>

An image processor API created with emphasis on architectural design patterns. The API utilizes HTTP POST requests to perform transformations on images. A client will send an image and a list of transformation requests in the form of JSON to the API. The API will perform the specified transformations on the image and send the transformed image back to the client via JSON.

## Design Document 

[Image Processor API](ImageProcessorAPI.pdf)

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

## Implementation

Three separate implementations of the API were built: one with C#, one with Python, and one with TypeScript. A client was also created using React with TypeScript as an example for how the image processor API could be accessed and utilized.
